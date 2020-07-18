import React, { useEffect, lazy, Suspense } from 'react';
import './shop.styles.scss';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions.js';
import Spinner from '../../components/spinner/spinner.component.jsx';
import { useMediaQuery } from 'react-responsive';
import shopData from '../../shopData';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewContainer = lazy(() =>
  import(
    '../../components/collections-overview/collections-overview.container.jsx'
  )
);

const HatsCollection = () => <CollectionPage collection={shopData[0]} />;
const SneakersCollection = () => <CollectionPage collection={shopData[1]} />;
const JacketsCollection = () => <CollectionPage collection={shopData[2]} />;
const WomenCollection = () => <CollectionPage collection={shopData[3]} />;
const MenCollection = () => <CollectionPage collection={shopData[4]} />;

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    // fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  const isMobile = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <div className='shop-page'>
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
        <Route exact path='/shop/hats' component={HatsCollection} />
        <Route exact path='/shop/jackets' component={JacketsCollection} />
        <Route exact path='/shop/sneakers' component={SneakersCollection} />
        <Route exact path='/shop/women' component={WomenCollection} />
        <Route exact path='/shop/men' component={MenCollection} />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default React.memo(connect(null, mapDispatchToProps)(ShopPage));
