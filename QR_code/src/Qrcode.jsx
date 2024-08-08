import React, { useState } from 'react'

export const Qrcode = () => {
    const [img, setImg] = useState('')
    const [loading, setLoading] = useState(false)
    const [qrData, setqrData] = useState('https://www.google.co.in')
    const [qrSize, setqrSize] = useState('150')

    function generateQR() {
        setLoading(true);
        try {
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url)
        } catch(error) {
            console.error("Error generating QR",error);
        } finally {
            setLoading(false);
        };
    };

    function downloadQR() {
        fetch(img)
        .then((response)=> response.blob())
        .then((blob)=>{
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = "link.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link)
        })
        .catch((error)=>{
            console.error('Error downloading QR Code',error);
        })
    }
  return (
    <div className='container'>
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>Please wait....</p>}
        {img && <img src={img} className='qr-code-img' alt="" />}
        <div className='label1'>
            <label htmlFor="label-input1">Data for QR link :</label>
            <input type="text" className='data-input' value={qrData} id='label-input1' placeholder='Enter data link' onChange={(e)=>setqrData(e.target.value)}/>
        </div>
        <div className='label2'>
            <label htmlFor="label-input2">QR size (e.g., 150) :</label>
            <input type="text" className='data-input' id='label-input2' placeholder='Enter QR size' onChange={(e)=>setqrSize(e.target.value)}/>
        </div>

        <div className='button-group'>
            <button className='generate-button' onClick={generateQR}> Generate QR </button>
            <button className='download-button' onClick={downloadQR}> Download QR </button>
        </div>
        <p>
            Designed By <a href="">Prakash</a>
        </p>

    </div>
  )
}
