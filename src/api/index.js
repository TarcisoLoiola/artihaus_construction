import Contact from './ContactApi'
import Content from './contentApi'
const API = {
    Contact,
    Content
}
export default API

// const uploadImage = async (file) => {
//     const reader = new FileReader();

//     reader.onloadend = async () => {
//       const base64Image = reader.result;

//       try {
//         const response = await fetch('http://localhost:5000/api/cloudinary/create', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ data: base64Image })
//         });

//         const result = await response.json();
//         console.log('Upload successful:', result);
//       } catch (error) {
//         console.error('Upload failed:', error);
//       }
//     };

//     reader.readAsDataURL(file); // converts file to base64 string
//   };

{/* <input type="file" onChange={(e) => uploadImage(e.target.files[0])} /> */ }

