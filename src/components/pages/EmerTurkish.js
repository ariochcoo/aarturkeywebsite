import React from "react";
import { Container, Card } from "react-bootstrap";
import Paper from "@mui/material/Paper";

const EmerTurkish = () => {
  return (
    <div>
      <Container>
        <Paper elevation={7}>
          <Card>
            <Paper elevation={7}>
              <Card.Header align="center">
                <h4>Acil Durum Telefon Numaraları</h4>
              </Card.Header>
            </Paper>

            <Card.Body>
              <h5>
                Çocuklara, Kadınlara ve Engelli Bireylere Yönelik Şiddet
                Durumunda
              </h5>
              <br></br>
              <Card.Text>
                Şiddete maruz kalan bireyler için şehir merkezleri veya kırsal
                alanlarda iki ana destek erişim kanalı vardır. Birincisi polis
                (155) veya jandarmaya (156) acil durum telefon numaralarını
                arayarak durumu bildirmektir. İkincisi de Aile, Çalışma ve
                Sosyal Hizmetler il ya da ilçe müdürlüklerine ulaşmaktır.
              </Card.Text>
              <br></br>
              <Card.Subtitle>
                Aile, Çalışma ve Sosyal Hizmetler Bakanlığı Sosyal Destek Hattı:
                183
              </Card.Subtitle>
              <Card.Text>
                <p>
                  Aile, Çalışma ve Sosyal Hizmetler Bakanlığı Çağrı
                  Merkezlerinden Alo 183 Sosyal Destek Hattı aracılığı ile aile,
                  kadın, çocuk, engelli, yaşlı, şehit yakınları ile gaziler ve
                  gazi yakınlarına yönelik hizmetlere ilişkin çağrılar
                  değerlendirilerek rehberlik ve danışmanlık hizmeti
                  sunulmaktadır.Alo 183 Hattı 7 gün 24 saat kesintisiz hizmet
                  vermektedir.
                </p>
                <p>
                  tarafından işletilen bir diğer hat ise Göç İdaresine bağlı
                  Yabancılar Destek Hattı’dır. Bu hat 7 farklı dilde (Arapça,
                  Farsça, Türkçe ve İngilizce de dahil olmak üzere) ülkedeki tüm
                  göçmenler (mülteciler ve uluslararsı koruma altındaki bireyler
                  de dahil) hizmet vermektedir. Aynı zamanda insan ticareti
                  mağdurları da bu numarayı arayarak destek alabilirler.
                </p>
              </Card.Text>
              <br></br>
              <Card.Text>
                <Card.Subtitle>
                  YİMER: 157 Yukarıdaki numaralardan destek alınamadağı
                  takdirde, şiddete maruz kalmış bireyler aşağıda bahsi geçen
                  sivil toplum kuruluşlarına başvurarak destek alabilirler
                </Card.Subtitle>
                <br></br>
                <Card.Subtitle>
                  Türkiye Kadın Dernekleri Federasyonu’na bağlı Aile içi Şiddet
                  Hattı: 02126569696
                </Card.Subtitle>
                <br></br>
                <Card.Text>
                  Bu hat 7/24 ulaşılabilir ve Arapça ve Kürtçe de destek
                  sunmaktadır.
                </Card.Text>
                <br></br>
                <Card.Subtitle> Mülteci Hakları Merkezi:</Card.Subtitle>
                <br></br>
                <p>0549 510 52 02(Arapça, İngilizce, Fransızca)</p>
                <p>0549 510 52 03 (Türkçe, Farsça)</p>
                <p>0507 218 62 85 (tutuklama ve gözaltı durumlarında)</p>
                <br></br>
                <p>
                  Bu Merkez yasal destek konusunda Pazartesi-Cuma saat 10:00 –
                  17:00 arası destek vermektedir. Herhangi bir koruma konusu,
                  özellikle şiddet, refakatsiz çocuklar gibi, için ilk iki
                  numara (konuşulan dile göre), gözaltı ve tutuklamalar
                  durumunda üçüncü numara aranmalıdır.
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Paper>
      </Container>
    </div>
  );
};

export default EmerTurkish;
