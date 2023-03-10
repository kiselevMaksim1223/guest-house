import React, {useState} from 'react';
import {StyledWrapper} from "../../../styled-components/Wrapper";
import {StyledContainer} from "../../../styled-components/Container";
import {FlexStyled} from "../../../styled-components/Flex";
import styled from "styled-components";
import {galleryData} from "../../../api/galleryData";
import {useLocation} from "react-router-dom";
import {StyledTitle} from "../../../styled-components/Title";
import Modal from "../../common/Modal";

export const Gallery = () => {
        const location = useLocation()
        const pathName = location.pathname.replace("/", "")[0].toUpperCase() + location.pathname.replace("/", "").slice(1)

        const [activeModal, setActiveModal] = useState<boolean>(false)
        const [currentPictures, setCurrentPictures] = useState<string | null>(null)


        const onClickOpenModalHandler = (id:string) => {
            setActiveModal(true)
            console.log(galleryData.filter(i => i.id === id)[0].img)
            setCurrentPictures(galleryData.filter(i => i.id === id)[0].img)
        }
        return (<>
                <Modal active = {activeModal} setActive = {setActiveModal}>
                    {currentPictures}
                </Modal>
                : <StyledWrapper>
                    <StyledContainer>
                        <StyledTitle as={"h2"} fontSize={"65px"} margin={"1em 0"} textAlign={"center"} color={"#2A2E49"}>
                            {pathName}
                        </StyledTitle>
                        <FlexStyled media flexWrap={"wrap"} columnGap={"2em"} rowGap={"2em"} margin={"3em auto"}
                                    align={"center"} justify={"space-between"}>
                            {galleryData.map(i => {
                                return (
                                    <GalleryItemWrapper onClick={() => onClickOpenModalHandler(i.id)}>
                                        <GalleryItem src={i.img}
                                                     width={i.proportions === "wide" ? 240 : 180}
                                                     height={i.proportions === "wide" ? 180 : 240}/>
                                    </GalleryItemWrapper>
                                )
                            })}
                        </FlexStyled>
                    </StyledContainer>
                </StyledWrapper>
            </>
        );
    }
;


const GalleryItem = styled.img`
  max-width: 100%;
`

const GalleryItemWrapper = styled.div`
  cursor: pointer;
  transition: .3s;

  :hover {
    transform: scale(1.1);

  }
`

