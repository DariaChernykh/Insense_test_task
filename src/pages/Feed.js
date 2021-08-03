import React, {useState} from "react";
import {Albums} from "../components/Albums";
import {Posts} from "../components/Posts";
import {Tabs} from "../components/Tabs";

export default () => {
    const [albumsIsActive, setAlbumsActive] = useState(true)
    const TABS = [
        {
            name: 'Albums',
            active: albumsIsActive,
            onClick: () => setAlbumsActive(true)
        },
        {
            name: 'Posts',
            active: !albumsIsActive,
            onClick: () => setAlbumsActive(false)
        }
    ]
    return (
        <>
            <Tabs tabs={TABS}/>
            {albumsIsActive ? <Albums/> : <Posts/>}
        </>
    );
}
