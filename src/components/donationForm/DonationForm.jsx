import { Card } from "antd";
import { useState } from "react";
import { ApplicationButton, Donations, DonationsContainer, FileInput, FileLabel, Form, FormElementContainer, FormGrid, FormHeader, FormSubHeader, GDPRRadio, GenericButton, InfoInput, InfoText, Select } from "./donationFormElements";

export default function DonationForm() {
    const [applicationType, setApplicationType] = useState("0");
    const [furnitureStatus, setFurnitureStatus] = useState("0");
    const [furnitureType, setFurnitureType] = useState("0");
    const [furnitureIsWorking, setFurnitureIsWorking] = useState("0");
    const [furnitureCount, setFurnitureCount] = useState("0");
    const [furnitureImage, setFurnitureImage] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [donations, setDonations] = useState([]);

    const [infoFormVisible, setInfoFormVisible] = useState(true);

    // applicationType, furnitureStatus, furnitureType, furnitureIsWorking, furnitureCount, furnitureImage, address, phone

    const addToDonationsList = (ev, a, b, c, d, e, f, g) => {
        ev.preventDefault();
        setDonations(donations => [...donations, {a, b, c, d, e, f, g}]);
        setApplicationType("0");
        setFurnitureStatus("0");
        setFurnitureType("0");
        setFurnitureIsWorking("0");
        setFurnitureCount("0");
        setFurnitureImage();
        setAddress("");
        setPhone("");
    };

    const uploadImage = async (e) => {
        setFurnitureImage(URL.createObjectURL(e.target.files[0]));
     };

    //basic validation control for adding furnitures
    const validationControl = furnitureStatus === "0" 
                            || furnitureType === "0" 
                            || furnitureIsWorking === "0" 
                            || furnitureCount === "0"
                            || address === "" 
                            || phone === "" 
                            || furnitureImage === "";

    return (<>
    <FormHeader>Deprem Bağışı</FormHeader>
    <FormSubHeader>Lorem ipsum stand up</FormSubHeader>
    <Form>
        {infoFormVisible && 
            <FormElementContainer>
                <Select onChange={(e) => setApplicationType(e.target.value)} value={applicationType}>
                    <option value="0">Başvuru Tipini Seçiniz</option>
                    <option value="vatandas">Vatandaş</option>
                    <option value="kurumsal">Kurumsal</option>
                    <option value="stk">Sivil Toplum Kuruluşu</option>
                </Select>
                {applicationType !== "0" && 
                    <>
                        <InfoText>Vatandaş Başvurusu</InfoText>
                        <InfoInput placeholder="TC Kimlik No"/>
                        <InfoInput placeholder="İsim"/>
                        <InfoInput placeholder="Soyisim"/>
                        <InfoInput placeholder="Doğum Tarihi"/>
                        <GDPRRadio>Kişisel verilerin korunması hakkında</GDPRRadio>
                        <ApplicationButton onClick={() => setInfoFormVisible(false)}>Başvuru Yap</ApplicationButton>
                    </>
                }
            </FormElementContainer>
        }
        {!infoFormVisible &&
        <FormGrid>
            <FormElementContainer>
                <Select onChange={(e) => setFurnitureStatus(e.target.value)} value={furnitureStatus}>
                    <option value="0">Eşya durumu seçiniz</option>
                    <option value="Sıfır">Sıfır</option>
                    <option value="İkinci el">İkinci El</option>
                </Select>
                <Select onChange={(e) => setFurnitureType(e.target.value)} value={furnitureType}>
                    <option value="0">Eşya türü seçiniz</option>
                    <option value="Koltuk Takımı">Koltuk Takımı</option>
                    <option value="Beyaz Eşya">Beyaz Eşya</option>
                </Select>
                <Select onChange={(e) => setFurnitureIsWorking(e.target.value)} value={furnitureIsWorking}>
                    <option value="0">Eşya çalışır durumda mı?</option>
                    <option value="Evet">Evet</option>
                    <option value="Hayır">Hayır</option>
                </Select>
                <FileInput type="file" accept="image/*" id="image" onChange={uploadImage}/>
                <FileLabel htmlFor="image">UPLOAD IMAGE</FileLabel>
                <Select onChange={(e) => setFurnitureCount(e.target.value)} value={furnitureCount}>
                    <option value="0">Adet</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </Select>
                <InfoInput placeholder="Eşyanın Alınacağı Adres" value={address} onChange={e => setAddress(e.target.value)}/>
                <InfoInput placeholder="Telefon No (Teslim Edecek Kişi)" value={phone} onChange={e => setPhone(e.target.value)}/>
                {validationControl ?
                    <GenericButton disabled style={{backgroundColor: "#c3c3c3", cursor: "none"}}>Ekle</GenericButton>
                    : <GenericButton onClick={(ev) => addToDonationsList(ev, furnitureStatus, furnitureType, furnitureIsWorking, furnitureCount, furnitureImage, address, phone)}>Ekle</GenericButton>
                }
            </FormElementContainer>
            <Donations>
            <DonationsContainer>
                {donations.length === 0 && <InfoText>Eşya Bağışı Bulunmamaktdır.</InfoText>}
                {donations.length > 0 && <>
                    {donations.map((donation, index) =>
                        <Card
                        key={index}
                        hoverable
                        style={{ width: 300 }}
                        cover={<img alt="furniture image" src={donation.e} />}
                        >
                            <p style={{height: "15px", fontSize: "12px"}}><b>Eşya tipi: </b>{donation.a} </p>
                            <p style={{height: "15px", fontSize: "12px"}}><b>Eşya türü: </b>{donation.c} </p>
                            <p style={{height: "15px", fontSize: "12px"}}><b>Adet: </b>{donation.d}</p>
                            <p style={{height: "15px", fontSize: "12px"}}><b>Telefon: </b>{donation.g}</p>
                            <p style={{height: "15px", fontSize: "12px"}}><b>Adres: </b>{donation.f}</p>
                        </Card>
                    )}
                    </>
                }
            </DonationsContainer>
            <GenericButton> Gönder </GenericButton>
            </Donations>
        </FormGrid>
        }
    </Form>
    </>)
}