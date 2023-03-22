import React from 'react';
import { Badge, Input } from 'antd';
import { FaSearch, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaRegBell } from 'react-icons/fa';
import {FcMenu} from 'react-icons/fc';
import {Header, HeaderContainer, Logo, LogoContainer, RestContainer, SearchArea, SignUpButton, SocialMediaContainer} from './topMenuElements';

function TopMenu() {
  return (<>
       <Header>
        <LogoContainer>
            <Logo style={{textAlign: "center"}}>
                LOGO
            </Logo>
        </LogoContainer>

        <HeaderContainer>
            <SearchArea suffix={<FaSearch style={{width: "32px", height: "32px"}}/>} placeholder="Arama Yap" bordered={false} />
            <SignUpButton>
                Üye Ol
            </SignUpButton>
            <SocialMediaContainer>
                <a href="#">
                    <FaFacebook style={{width: "20px", height: "20px", color: "#44CB83", margin: "0 16px"}} />
                </a>
                <a href="#">
                    <FaInstagram style={{width: "20px", height: "20px", color: "#44CB83", margin: "0 16px"}}/>
                </a>
                <a href="#">
                    <FaTwitter style={{width: "20px", height: "20px", color: "#44CB83", margin: "0 16px"}}/>
                </a>
                <a href="#">
                    <FaLinkedin style={{width: "20px", height: "20px", color: "#44CB83", margin: "0 16px"}}/>
                </a>
                <a href="#">
                    <FaYoutube style={{width: "20px", height: "20px", color: "#44CB83", margin: "0 16px"}}/>
                </a>
            </SocialMediaContainer>
            <RestContainer>
                <Badge count={5} offset={[-2,-2]}>
                    <a href="#">
                        <FaRegBell style={{width: "20px", height: "20px", color: "#9DA8C3", margin: "0 16px"}}/>
                    </a>
                </Badge>
                <a href="#">
                    <FcMenu style={{width: "20px", height: "20px", color: "#9DA8C3", margin: "0 16px"}}/>
                </a>
            </RestContainer>
        </HeaderContainer>
        
    </Header>
    </>
    //   <Menu.Item key="logo" className='logo'>
    //     LOGO
    //     {/* <img src={logo} alt="Logo" style={{ width: 50, height: 50 }} /> */}
    //   </Menu.Item>
    //   <Menu.Item key="search" style={{ width: '40%' }}>
    //     <Search
    //       placeholder="Search"
    //       enterButton={<FaSearch />}
    //       size="large"
    //     />
    //   </Menu.Item>
    //   <Menu.Item key="social">
    //     <a href="#">
    //       <FaFacebook />
    //     </a>
    //     <a href="#">
    //       <FaTwitter />
    //     </a>
    //     <a href="#">
    //       <FaInstagram />
    //     </a>
    //   </Menu.Item>
    // </Menu>
  );
}

export default TopMenu;
