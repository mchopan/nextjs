
import photos from '../../../photo-array'
import Modal from '@/components/Modal';
export default function Photo({ params: { id } }) {

    const photoData = photos.find((p) => p.id == id);

    if (!photoData) {
        return (
            <h1>Photo Not Found</h1>
        )
    }

    return (
        <Modal
            title={photoData?.title}
            desc={photoData?.desc}
            src={photoData?.src}
        />
    )
}