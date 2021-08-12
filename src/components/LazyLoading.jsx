import Skeleton from 'react-loading-skeleton';


const LazyLoading = () => {
  return (
    <div>
      <Skeleton height={200}/>
      
      <Skeleton height={30} style={{margin: "1.4em 0"}}/>
      <Skeleton style={{width:"70%",display:"block",margin:"1em 0"}}/>
      <Skeleton style={{width:"70%",display:"block",margin:"1em 0"}}/>
      <Skeleton style={{width:"70%",display:"block",margin:"1em 0"}}/>
    </div>
  );
};

export default LazyLoading;
