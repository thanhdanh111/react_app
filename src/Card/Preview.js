import styled from 'styled-components'



export const Container = styled.div`
position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    text-align: center;
    place-items: center;
    height: 200px;
    top: 0px;
    p {
        
        color: #777;
    }
`

export const BoxUpload = styled.div`
    position: absolute;
    top:-50px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    place-items: center;
    border: 1px dashed #799CD9;
    height: 180px;
    width: 180px;
    background: #FBFBFF;
    border-radius: 50%;
    .image-upload {
        display: flex;
        flex-wrap:wrap;
        label {
            cursor: pointer;
        
            :hover {
                opacity: .8;
            }
        }

        >input {
            display: none;
        }
    }
`

export const ImagePreview = styled.div`
    text-align: center;
    position: relative;
    /* cursor: pointer; */

    #uploaded-image{
        positon: relative;
        height: 180px;
        width: 180px;
        object-fit: cover;
        border-radius: 50%;
       
    }

    .close-icon{
        background: #000;
        border-radius: 5px;
        opacity: .8;
        position: absolute;
        z-index: 10;
        right: 15px;
        top: 20px;
        cursor: pointer;

        :hover {
            opacity: 1;
        }   
    }
`