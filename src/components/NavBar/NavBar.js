import React, { useState } from 'react';
import Icon from "feather-icons-react";
import CardWidget from '../CardWidget/CardWidget';
import classNames from "classnames/bind";
import navStyles from "./NavBar.module.css";
import logo from "../../assets/logo.png"
const cx = classNames.bind(navStyles);

const ListNav = () => {
    return (
        <>
            <li className={cx("border-b border-gray-400 my-8 uppercase", "itemNav")}>
                <a href="/">Inicio</a>
            </li>
            <li className={cx("border-b border-gray-400 my-8 uppercase", "itemNav")}>
                <a href="/category/clothes">Ropa</a>
            </li>
            <li className={cx("border-b border-gray-400 my-8 uppercase", "itemNav")}>
                <a href="/category/jewelery">Joyeria</a>
            </li>
            <li className={cx("border-b border-gray-400 my-8 uppercase", "itemNav")}>
                <a href="/category/others">Otros</a>
            </li>
        </>
    )
}

const NavBar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    return (
        <>
            <header className={cx("text-gray-600 body-font hidden lg:flex")}>
                <a href='/' className={cx("flex justify-center absolute", "position")}>
                    <img alt='logo' src={logo} style={{ width: "100px" }} ></img>
                </a>
                <nav className={cx("md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-around", "headerStyle")}>
                    <ul className="flex flex-wrap justify-around w-full">
                        <ListNav />
                    </ul>
                </nav>
                <div className={cx("flex justify-center absolute", "positionShopping")}>
                    <CardWidget iconStyle={{ color: "white" }} />
                </div>
            </header>
            <section className={cx("lg:hidden")} >
                <div className={cx("flex items-center px-10 pt-5")} >
                    <span onClick={() => setIsNavOpen((prev) => !prev)} className={cx("cursor-pointer pr-7")} ><Icon icon="menu" width="30" height="30" /></span>
                    <h1 className={cx("text-lg font-black text-orange-500 font-serif")} >DulceTarde Clothes</h1>
                    <div className={cx("flex justify-center absolute", "positionShoppingResponsive")}>
                        <CardWidget />
                    </div>
                </div>
                <div className={cx(isNavOpen ? "showMenuNav" : "hideMenuNav")}>
                    <span className={cx("cursor-pointer")} onClick={() => setIsNavOpen(false)} >  <Icon icon="x" width="25" height="25" /> </span>
                    <ul className="flex flex-col items-center justify-between">
                        <ListNav />
                    </ul>
                </div>
            </section>
        </>
    );
}

export default NavBar;