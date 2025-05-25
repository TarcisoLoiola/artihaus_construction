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
                className="backgroundColor-darkgray color-white radius-xs border-softgray zIndex-10 padding-sm cursor-pointer"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
            >
                <div className="grid grid-1fr-auto">
                    <div className='text-center'>{galleryCategory}</div>

                    <div className='borderLeft-white paddingLeft-sm paddingRight-sm'><Arrow color='white' /></div>
                </div>
                {isOpen && (
                    <div
                        className="absolute backgroundColor-lightgray radius-xs color-gray border-lightgray marginTop-xs left-xl"
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
                                className={`${hovered === cat && 'backgroundColor-darkgray color-white'} ${index === 0 ? 'radiusTop-xs' : index === filteredCategories.length - 1 ? 'radiusBottom-xs' : ''} button-lg padding-sm text-center`}
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
