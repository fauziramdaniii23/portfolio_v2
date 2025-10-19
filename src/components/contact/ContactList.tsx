
    const mediaSosial = [
  {
    name: "gmail",
    title: "Tetap Terhubung",
    description: "Hubungi saya via email untuk pertanyaan atau kolaborasi."
  },
  {
    name: "instagram",
    title: "Ikuti Perjalanan Saya",
    description: "Ikuti perjalanan kreatif saya."
  },
  {
    name: "linkedin",
    title: "Mari Terhubung",
    description: "Terhubung secara profesional dengan saya."
  },
  {
    name: "tiktok",
    title: "Ikut Seru-seruan",
    description: "Tonton konten yang seru dan menarik."
  },
  {
    name: "github",
    title: "Jelajahi Kode",
    description: "Lihat karya open-source saya."
  }
];

import ContactCard from "./ContactCard";
import { SOCIAL_MEDIA } from "@/constant/constant";

const ContactList = () => {
  const filteredSocialMedia = SOCIAL_MEDIA?.filter((social) => social?.isShow);

  return (
    <div className="flex flex-col space-y-4">
      {/* <h2>{t("social_media.title")}</h2> */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredSocialMedia.map((media) => (
          <ContactCard key={media.title} {...media} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;