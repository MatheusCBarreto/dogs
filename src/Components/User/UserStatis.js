import React, { useEffect } from 'react';
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import { GET_STATIS } from '../../api';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
const UserStatsGraphs = React.lazy(() => import('../Login/UserStatsGraphs'));

const UserStatis = () => {
  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    async function getData() {
      const { url, options } = GET_STATIS();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
};

export default UserStatis;
