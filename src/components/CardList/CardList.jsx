import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/CardsFavorite.jsx';

import { List, ContainerBtnPagination } from './CardList.styled.js';
import Pagination from '../../Pagination/Pagination.jsx';
import ButtonPagination from '../../UI/ButtonPagination/ButtonPagination.jsx';

const CardList = ({ items, onDel }) => {
  const [contentPerPage, setContentPerPage] = useState(8);

  useEffect(() => {
    const changeNumberItems = () => {
      if (window.innerWidth > 1200) {
        setContentPerPage(8);
      } else if (window.innerWidth > 768) {
        setContentPerPage(4);
      } else {
        setContentPerPage(2);
      }
    };
    changeNumberItems();

    window.addEventListener('resize', changeNumberItems);
    return () => {
      window.removeEventListener('resize', changeNumberItems);
    };
  }, []);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = Pagination({
    contentPerPage,
    count: items.length,
  });

  const deleteCar = async id => {
    await onDel(id);
  };

  const elements = items
    .slice(firstContentIndex, lastContentIndex)
    .map(item => (
      <Card key={item.id} {...item} onDelete={deleteCar} />
    ));

  return (
    <>
      <List>{elements}</List>
      <ContainerBtnPagination>
        <ButtonPagination
          prevPage={prevPage}
          totalPages={totalPages}
          nextPage={nextPage}
          page={page}
          setPage={setPage}
          pageType="catalog"
        />
      </ContainerBtnPagination>
    </>
  );
};

export default CardList;

CardList.propTypes = {
  items: PropTypes.array,
  onDel: PropTypes.func,
};