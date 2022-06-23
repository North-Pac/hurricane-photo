import { Flex } from '@chakra-ui/react';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCode } from '@fortawesome/free-solid-svg-icons';

const Footer = () =>
{
    return (
        <footer id="footer">
                <Flex columnGap="1em"alignContent="center" justifyContent="center">
                <p className="copyright_nomargin">&copy; Code Fellows Python 401d18 2022 - Team North-Pac
                </p>
                <a href="https://github.com/North-Pac"
                   className="icon fa-github alt">
                            <FontAwesomeIcon icon={faFileCode} />
                        </a>
             
                </Flex>           
        </footer>
    )
};

export default Footer;

