import "../styles/ClientsCommits.scss"
import React, { useEffect, useRef } from 'react'
import { Button, IconButton, TextField } from "@mui/material"
import { Send } from "@mui/icons-material";
import { writeCommitAction } from "../utils/connection";
import { useDispatch, useSelector } from "react-redux";
import { showComments } from "../Redux/actions/product";

function ClientsCommits({ idProduct }) {
    const img = false
    const dispatch = useDispatch()
    const inputComment = useRef()
    const userName = useSelector(state => state.user.name)
    const listComment = useSelector(state => state.comment.commentList)

    useEffect(() => {
        dispatch(showComments(idProduct))
    }, [idProduct])
    const handleSend = async () => {
        await writeCommitAction({
            idProduct,
            comment: inputComment.current.value,
            userName,
        })
        inputComment.current.value = ""
        dispatch(showComments(idProduct))
    }

    // const img = "https://scontent.fbog4-1.fna.fbcdn.net/v/t39.30808-6/278900903_519056286537992_778222834245015378_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=z-Ov03KWspoAX_Fv5m5&_nc_ht=scontent.fbog4-1.fna&oh=00_AT_FD-x8JKcl4L7xf9Zi5FvG9bgTsxEB1GBNJVzXMox3Pg&oe=626BDFF6"
    return (
        <div>
            <h2>Opiniones de clientes</h2>
            <div className="sendCommit">
                <TextField inputRef={inputComment} id="outlined-basic" label="Write us your opinion" variant="outlined" fullWidth />
                <IconButton variant="contained" className="sendButton" onClick={handleSend}>
                    <Send />
                </IconButton>
            </div>
            {listComment.map(item => (
                <>
                    <div className="contentComment">
                        <div>
                            {img ?
                                <img src={img} /> :
                                <p>{item.userName[0]}</p>
                            }
                        </div>
                        <p>{item.userName}</p>
                    </div>
                    <div>
                        <p>{item.comment}</p>
                    </div>
                </>
            ))}
        </div>
    )
}

export default ClientsCommits