import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    const customNavigate = (to, options) => {
      if (typeof to === 'number') {
        return navigate(to, options);
      }

      const targetPathname =
        typeof to === 'string' ? to.split('?')[0].split('#')[0] : to?.pathname;

      if (targetPathname === location.pathname) {
        return;
      }

      navigate(to, options);
    };

    return (
      <Component
        {...props}
        location={location}
        params={params}
        navigate={customNavigate}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter;
