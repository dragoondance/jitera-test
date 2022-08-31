import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import { ButtonSeparator, Card, DescWrapper, InfoWrapper, ModalWrapper, NameWrapper, OptionsWrapper, StyledButton, TextButton, TextStyled, YesNoButtonWrapper } from './UserCardStyle'
import AppModal from '../AppModal/AppModal'

interface UserCardProps {
    user: {
        id: number
        username: String
        name: String
        phone: String
        email: String
        website: String
        address: {
            street: String
            suite: String
            city: String
            zipcode: String
            geo: {
                lat: String
                lng: String
            }
        }
        company: {
            name: String
            catchPhrase: String
            bs: String
        }
        isFav: boolean
        isDeleted: boolean
    }
    setUser: Function
}

const UserCard: React.FC<UserCardProps> = ({
    user,
    setUser,
}) => {
    const [modalDeleteOpen, setModalDeleteOpen] = useState<boolean>(false)

    const getImageUrl = (username: String) => {
        return `https://avatars.dicebear.com/v2/avataaars/{{${username}}}.svg?options[mood][]=happyhttps://avatars.dicebear.com/v2/avataaars/{{${username}}}.svg?options[mood][]=happy}`
    }

    return (
        <Card>
            <AppModal modalIsOpen={modalDeleteOpen}>
                <ModalWrapper>
                    <NameWrapper>{`Are you sure want to delete user ${user.name}?`}</NameWrapper>
                    <YesNoButtonWrapper>
                        <TextButton onClick={() => {
                            let tempUser = {...user}
                            tempUser.isDeleted = true
                            setUser(tempUser)
                            setModalDeleteOpen(false)
                        }}>
                            {'Yes'}
                        </TextButton>
                        <TextButton onClick={() => {
                            setModalDeleteOpen(false)
                        }}>
                            {'No'}
                        </TextButton>
                    </YesNoButtonWrapper>
                </ModalWrapper>
            </AppModal>
            <AppModal modalIsOpen={modalDeleteOpen}>
                <ModalWrapper>
                    <NameWrapper>{`Are you sure want to delete user ${user.name}?`}</NameWrapper>
                    <YesNoButtonWrapper>
                        <TextButton onClick={() => {
                            let tempUser = {...user}
                            tempUser.isDeleted = true
                            setUser(tempUser)
                            setModalDeleteOpen(false)
                        }}>
                            {'Yes'}
                        </TextButton>
                        <TextButton onClick={() => {
                            setModalDeleteOpen(false)
                        }}>
                            {'No'}
                        </TextButton>
                    </YesNoButtonWrapper>
                </ModalWrapper>
            </AppModal>
            <img alt={`${user.id}`} src={getImageUrl(user.username)} />
            <InfoWrapper>
                <NameWrapper>
                    {user.name}
                </NameWrapper>
                <DescWrapper>
                    <FontAwesomeIcon color={'#5B5B5B'} icon={regular('envelope')} />
                    <TextStyled>
                        {user.email}
                    </TextStyled>
                </DescWrapper>
                <DescWrapper>
                    <FontAwesomeIcon color={'#5B5B5B'} icon={solid('phone')} />
                    <TextStyled>
                        {user.phone}
                    </TextStyled>
                </DescWrapper>
                <DescWrapper>
                    <FontAwesomeIcon color={'#5B5B5B'} icon={solid('globe')} />
                    <TextStyled>
                        {user.website}
                    </TextStyled>
                </DescWrapper>
            </InfoWrapper>
            <OptionsWrapper>
                <StyledButton onClick={() => {
                    let tempUser = {...user}
                    tempUser.isFav = !tempUser.isFav
                    setUser(tempUser)
                }}>
                    <FontAwesomeIcon color={'#FF1614'} icon={!user.isFav ? regular('heart') : solid('heart')} />
                </StyledButton>
                <ButtonSeparator />
                <StyledButton>
                    <FontAwesomeIcon color={'#5B5B5B'} icon={solid('edit')} />
                </StyledButton>
                <ButtonSeparator />
                <StyledButton onClick={() => {
                    setModalDeleteOpen(true)
                }}>
                    <FontAwesomeIcon color={'#5B5B5B'} icon={solid('trash')} />
                </StyledButton>
            </OptionsWrapper>
        </Card>
    )
}


export { UserCard } 