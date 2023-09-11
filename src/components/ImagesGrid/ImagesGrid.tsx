import { Image } from '../../modules/Image';
import InfiniteScroll from 'react-infinite-scroller';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { loadMoreImages } from '../../store/ImagesSlice';
import fetchImages from '../../api/imagesApi';
import './ImagesGrid.css'

function ImagesGrid() {
    const images: Image[] = useSelector(
        (state: RootState) => state.images
    );
 
    const dispatch = useDispatch();

    const onLoad = async () => {
        fetchImages().then(result => {
            dispatch(loadMoreImages(result));
        }).catch(err => {
            console.log(err);
            throw new Error(`Failed gallery load: ${err.message}`);
        })
    }

    return (
        <InfiniteScroll
            className='imagesGrid'
            loadMore={onLoad}
            hasMore={true}
            loader={<div className="loader" key={0}>Loading ...</div>}
            threshold={300}
        >
            {images?.map((image) => (
                <img className="img" key={image.id} src={image.download_url} alt={image.id} />
            ))}
        </InfiniteScroll>
    );
}

export default ImagesGrid;