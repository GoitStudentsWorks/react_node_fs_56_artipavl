import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

import { getCategoryPage, getCategoryList } from 'api/serviseApi';

import {
  Container,
  Title,
  List,
  CardLink,
  ImgBox,
  Card,
  TitleBox,
  TitleCard,
  PaginationBtn,
  BoxPagination,
} from 'components/Categories/Categories.styled.js';

import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { selectorSwicherTheme } from 'redux/selectors';

createTheme({
  castom: {
    danger: '#8BAA36',
  },
});

export const Categories = () => {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryList, setCategoryList] = useState([]);
  const [itemArray, setItemArray] = useState([]);
  const [oneParam] = useState(useParams().categoryName);
  const [totalPage, setTotalPage] = useState(1);
  const [page, setPage] = useState(1);

  const theme = useSelector(selectorSwicherTheme);

  console.log(isLoading);
  useEffect(() => {
    const fetchProductList = async () => {
      setIsLoading(true);
      try {
        setCategoryList(await getCategoryPage());
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProductList();
  }, []);

  const numberedArray = categoryList.map((element, index) => {
    return {
      id: index + 1,
      value: element,
    };
  });

  const obj = numberedArray.find(item => item.value === oneParam);
  const id = obj?.id;

  useEffect(() => {
    if (oneParam === undefined) return;
    setValue(id - 1);
  }, [id, oneParam]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const nameEl = numberedArray[value]?.value;

  useEffect(() => {
    if (nameEl === undefined) return;
    getCategoryList(nameEl, page).then(({ result, total }) => {
      setItemArray(result);
      const pageCounts = Math.ceil(total / 8);
      if (pageCounts > 1) {
        setTotalPage(pageCounts);
      } else {
        setTotalPage(1);
      }
      setPage(1);
    });
  }, [nameEl, page]);

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <Container>
        <Title>Categories</Title>
        <Box
          sx={{
            maxWidth: '100%',
            marginTop: { xs: '50px', lg: '100px' },
            borderBottom: '1px solid var(--lineColor)',
            minHeight: '48px',
          }}
        >
          <Tabs
            value={value || 0}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons={false}
            aria-label="scrollable prevent tabs example"
            sx={{
              '.MuiTabs-indicator': {
                backgroundColor: '#8BAA36',
              },
            }}
          >
            {numberedArray.map(item => (
              <Tab
                sx={{
                  '&.Mui-selected': {
                    color: '#8BAA36',
                  },
                  color:
                    theme === 'light' ? '#BDBDBD' : `rgba(250, 250, 250, 0.6)`,
                }}
                key={item.id}
                label={item.value}
              />
            ))}
          </Tabs>
        </Box>

        <List>
          {itemArray.map(({ _id, title, thumb }) => (
            <li key={_id}>
              <CardLink to={`/recipe/${_id}`}>
                <ImgBox animation={title.length > 34}>
                  <Card alt={title} src={thumb} />
                  <TitleBox>
                    <TitleCard>{title}</TitleCard>
                  </TitleBox>
                </ImgBox>
              </CardLink>
            </li>
          ))}
        </List>
        <BoxPagination>
          <Stack spacing={2}>
            <PaginationBtn onChange={handleChangePage} count={totalPage} />
          </Stack>
        </BoxPagination>
      </Container>
    </>
  );
};
