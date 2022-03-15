import React, { useContext, useState, useEffect } from "react";
import {
  Container,
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Accordion,
} from "react-bootstrap";

import contactImage from "./eng_yoko_color.png";
import Paper from "@mui/material/Paper";
import { LanguageContext } from "../../context/LanguageContext";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

const SidePage = () => {
  // eslint-disable-next-line no-unused-vars
  const [siteLanguage, setSiteLanguage] = useContext(LanguageContext);
  const [complainForm, setComplainForm] = useState({
    header: "",
    text: "",
    buttonText: "",
    operationHeader: "",
    operationText: "",
    operationLine1: "",
    operationLine2: "",
    operationLine1Text: "",
    operationLine2Text: "",
  });

  const [phonePart, setPhonePart] = useState({
    title: "",
    text: "",
  });

  useEffect(() => {
    handlerSidePanelText(siteLanguage);
  }, [siteLanguage]);

  function handlerSidePanelText(siteLanguage) {
    if (siteLanguage === "English") {
      setComplainForm({
        header: "AAR Japan Complain Line",
        text: "If you want to make a complaint about AAR Japan services , you can access the complaint form from the button below .",
        buttonText: "Go To Complain Form",
      });
      setPhonePart({
        title: "Contact Information",
        text: "You can reach us from our contact numbers and get information about our services.",
      });
    } else if (siteLanguage === "Turkish") {
      setComplainForm({
        header: "AAR Japan Şikayet Hattı",
        text: "AAR Japan servisleri ile ilgili şikayette bulunmak istiyorsanız aşağıdaki butondan şikayet formuna ulaşabilirsiniz.",
        buttonText: "Şikayet Formuna Git",
        operationHeader: "AAR Japan Türkiye Operasyonu",
        operationText:
          "AAR Japan, 2012'den beri Suriye'deki iç savaştan kaçan Türkiye'deki Suriyeli mültecilere insani yardım sağlıyor. 2011'den 2013'e kadar AAR, Türkiye'nin doğusundaki 2011 depreminin kurbanlarına acil yardım ve engelli çocuklara yardım sağladı.",
        operationLine1: "Suriyeli mültecilere insani yardım",
        operationLine2: "2011 Türkiye depremine insani müdahale",
        operationLine1Text:
          "AAR Japonya'nın Suriyeli mülteci krizine müdahalesi Ekim 2012'de ayni dağıtım yardımı ile başladı. O zamandan beri AAR Japonya gıda ve diğer temel ihtiyaç maddelerini dağıttı ve illerdeki engelli kişilere eğitim yardımı ve yardımı sağladı. Türkiye'nin güneydoğusunda Hatay ve Kilis. Ayrıca, Ekim 2014'ten Mayıs 2015'e kadar AAR Japan, Şanlıurfa ilinin Suruç ilçesine bir acil müdahale ekibi gönderdi ve IŞİD'in Ayn-Al-Arap'a yaptığı ilerlemelerden kaçan Suriyeli mültecilere gıda ve temel ihtiyaç malzemeleri sağladı (ayrıca Kobane) kuzey Suriye'de.",
        operationLine2Text:
          "23 Ekim 2011'de Türkiye'nin doğusunda 7,2 büyüklüğünde yıkıcı bir deprem meydana geldi ve 640 kişinin ölümüne ve 4000'den fazla kişinin yaralanmasına neden oldu. AAR Japan, 26 Ekim'de Türkiye'ye üç personelden oluşan bir acil müdahale ekibi gönderdi. Ekipler hızlı bir şekilde değerlendirme yaptı ve ardından özellikle depremden etkilenen Van'da 161 haneye gıda ve temel ihtiyaç malzemeleri dağıttı.",
      });
      setPhonePart({
        title: "İletişim bilgileri",
        text: "Bize iletişim numaralarımızdan ulaşabilir ve hizmetlerimiz hakkında bilgi alabilirsiniz.",
      });
    } else if (siteLanguage === "Arabic") {
      setComplainForm({
        header: " يشكو لين",
        text: "إذا كنت تريد تقديم شكوى بشأن خدمات AAR Japan ، فيمكنك الوصول إلى نموذج الشكوى من الزر أدناه.",
        buttonText: "انتقل إلى نموذج الشكوى",
        operationHeader: "عملية AAR Japan Turkey",
        operationText:
          "منذ عام 2012 ، تقدم AAR Japan المساعدات الإنسانية للاجئين السوريين في تركيا الذين فروا من الحرب الأهلية في سوريا. من عام 2011 إلى عام 2013 ، قدمت AAR أيضًا الإغاثة الطارئة لضحايا زلزال 2011 في شرق تركيا ومساعدة الأطفال ذوي الإعاقة.",
        operationLine1: "مساعدات إنسانية للاجئين السوريين",
        operationLine2: "الاستجابة الإنسانية لزلزال تركيا 2011",
        operationLine1Text:
          "بدأت استجابة AAR Japan لأزمة اللاجئين السوريين بمساعدة توزيع عينية في أكتوبر 2012. ومنذ ذلك الحين ، قامت AAR Japan بتوزيع المواد الغذائية وغيرها من الاحتياجات الأساسية ، وقدمت المساعدة التعليمية والمساعدة للأشخاص ذوي الإعاقة في محافظات هاتاي وكيليس في جنوب شرق تركيا. علاوة على ذلك ، من أكتوبر 2014 إلى مايو 2015 ، أرسلت AAR Japan فريق استجابة للطوارئ إلى منطقة Suruc في مقاطعة Sanliurfa وقدمت المواد الغذائية والاحتياجات الأساسية للاجئين السوريين الفارين من التقدم الذي أحرزه تنظيم الدولة الإسلامية في عين العرب (أيضًا تسمى كوباني) في شمال سوريا. ",
        operationLine2Text:
          "في 23 أكتوبر 2011 ، تعرض شرق تركيا لزلزال مدمر بلغت قوته 7.2 درجة ، مما تسبب في مقتل 640 شخصًا وإصابة أكثر من 4000 شخص. أرسلت AAR Japan فريق استجابة للطوارئ من ثلاثة موظفين إلى تركيا في 26 أكتوبر. أجرى الفريق التقييم بسرعة ثم وزع المواد الغذائية والضروريات الأساسية على 161 أسرة في مقاطعة فان ، التي تضررت بشكل خاص من الزلزال.",
      });
      setPhonePart({
        title: "معلومات التواصل",
        text: "يمكنك الوصول إلينا من أرقام الاتصال الخاصة بنا والحصول على معلومات حول خدماتنا",
      });
    } else {
    }
  }

  return (
    <div>
      <Container fluid>
        <Card>
          <Paper elevation={7}>
            <Card.Header>
              <Card.Img variant="top" src={contactImage} />
            </Card.Header>
          </Paper>

          <Paper elevation={7}>
            <Card>
              <Card.Title align="center" className="p-2">
                {complainForm.operationHeader}
              </Card.Title>
              <Card.Body>
                <Card.Text align="center">
                  {complainForm.operationText}
                </Card.Text>
                <Card.Text align="center">
                  <Accordion defaultActiveKey="">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        {complainForm.operationLine1}
                      </Accordion.Header>
                      <Accordion.Body>
                        {complainForm.operationLine1Text}
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        {complainForm.operationLine2}
                      </Accordion.Header>
                      <Accordion.Body>
                        {complainForm.operationLine2Text}
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Card.Text>
              </Card.Body>
            </Card>
          </Paper>
          <br></br>
          <Paper elevation={7}>
            <Card>
              <Card.Body>
                <Card.Title align="center">{complainForm.header}</Card.Title>
                <Card.Text align="center">{complainForm.text}</Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  {siteLanguage === "Arabic" ? (
                    <div className="d-grid gap-2" align="center">
                      <a
                        href="https://forms.office.com/pages/responsepage.aspx?id=16bz_jLno0GvHN1mIdb0tRxfZlpGFnxGuraMiPvF51xUQzlGVEM1MDc2WjVDUzFMM0ZTOUxLWFFSNyQlQCN0PWcu"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Button variant="danger">
                          {complainForm.buttonText}
                        </Button>
                      </a>
                    </div>
                  ) : (
                    <div className="d-grid gap-2" align="center">
                      <a
                        href="https://forms.office.com/pages/responsepage.aspx?id=16bz_jLno0GvHN1mIdb0tRxfZlpGFnxGuraMiPvF51xUMjk3NDNLNDdDOFowWjFMRVlVMEkxOU41VCQlQCN0PWcu"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <Button variant="danger">
                          {complainForm.buttonText}
                        </Button>
                      </a>
                    </div>
                  )}
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Paper>
          <br></br>
          <Paper elevation={7}>
            <Card>
              {/* <Card.Img variant="top" src={contactImage} /> */}
              <Card.Body>
                <Card.Title align="center">{phonePart.title}</Card.Title>
                <Card.Text align="center">{phonePart.text}</Card.Text>
              </Card.Body>
              <ListGroup align="center" className="list-group-flush">
                <ListGroupItem>
                  <ContactPhoneIcon
                    color="error"
                    sx={{ mb: 0.5, mr: 3, ml: 3 }}
                  />
                  Gaziantep: 05374410286
                </ListGroupItem>
                <ListGroupItem>
                  <ContactPhoneIcon
                    color="error"
                    sx={{ mb: 0.5, mr: 4, ml: 3 }}
                  />
                  Şanlıurfa: 05312626378
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Paper>
        </Card>
      </Container>
    </div>
  );
};

export default SidePage;
