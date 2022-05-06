
const url = "https://api.cloudinary.com/v1_1/dwbno71qd/upload";


export const uploadImages = async (files) => {
    const fileListAsArray = Array.from(files)
    const promises = fileListAsArray.map(async file => {
        const formData = new FormData();
        formData.append('file', file)
        formData.append("upload_preset", "syzolsdz")
        return await fetch(url, {
            method: "POST",
            body: formData
        }).then(response => response.json())
            .then(data => {
                return data
            })
    })
    const data = await Promise.all(promises)
    return data
}

// const files = document.querySelector("[type=file]").files;
// const formData = new FormData();

// for (let i = 0; i < files.length; i++) {
//   let file = files[i];
//   formData.append("file", file);
//   formData.append("upload_preset", "docs_upload_example_us_preset");

//   fetch(url, {
//     method: "POST",
//     body: formData
//   })
//     .then((response) => {
//       return response.text();
//     })
//     .then((data) => {
//       document.getElementById("data").innerHTML += data;
//     });
// }
// });