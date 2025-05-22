import { useContext, useState, useMemo } from "react";
import { GalleryContext } from "../context/GalleryContext";
import Arrow from '../Assets/DropdownIcon'

const CategoryDropdown = () => {
    const { selectedImages, galleryCategory, setGalleryCategory } = useContext(GalleryContext);
    const [isOpen, setIsOpen] = useState(false);
    const [hovered, setHovered] = useState('');

    const categories = useMemo(() => {
        const allCategories = selectedImages.map(img => img.category);
        const unique = Array.from(new Set(allCategories));
        return ['All', ...unique.filter(cat => cat !== 'All')]; // Ensure 'All' is always at the top
    }, [selectedImages]);

    const filteredCategories = categories.filter(cat => cat !== galleryCategory);
    return (
        <div className="">
            <div
                className="u-backg-c-darkgray u-color-white u-radius-xs u-border-lite z-index-dropdown u-padding-sm cursor-pointer"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <div className="grid grid-1fr-auto">
                    <div className='text-center'>{galleryCategory}</div>

                    <div className='border-left-white u-padding-left-sm u-padding-right-sm'><Arrow color='white' /></div>
                </div>
                {isOpen && (
                    <div
                        className="absolute u-backg-c-lightgray u-radius-xs u-color-gray u-border-lite u-mr-tp-xs left-xl"
                    >
                        {filteredCategories.map((cat, index) => (
                            <div
                                key={cat}
                                onClick={() => {
                                    setGalleryCategory(cat);
                                    setIsOpen(false);
                                    if (window.scrollY > 215) {
                                        window.scrollTo({
                                            top: 215,
                                            behavior: 'smooth'
                                        });
                                    }
                                }}
                                className={`${hovered === cat && 'u-backg-c-darkgray u-color-white'} ${index === 0 ? 'radius-top-xs' : index === filteredCategories.length - 1 ? 'radius-bottom-xs' : ''} u-btn-lg u-padding-sm text-center`}
                                onMouseEnter={() => setHovered(cat)}
                                onMouseLeave={() => setHovered('')}
                            >
                                {cat}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
export default CategoryDropdown;
