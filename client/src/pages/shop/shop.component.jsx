import React, { useEffect, lazy, Suspense } from 'react';
import './shop.styles.scss';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions.js';
import Spinner from '../../components/spinner/spinner.component.jsx';
import SearchIcon from '@material-ui/icons/Search';
import { useMediaQuery } from 'react-responsive';

const CollectionsOverviewContainer = lazy(() =>
  import(
    '../../components/collections-overview/collections-overview.container.jsx'
  )
);

const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container.jsx')
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <div className='shop-page'>
      <span className='search-icon'>
        <SearchIcon />
      </span>
      <Link to='/search' className='search-link'>
        Search Products
      </Link>
      {isMobile ? (
        <div style={{ height: '70px' }} />
      ) : (
        <div style={{ height: '30px' }} />
      )}
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default React.memo(connect(null, mapDispatchToProps)(ShopPage));
