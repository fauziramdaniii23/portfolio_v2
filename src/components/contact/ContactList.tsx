
'use client'
import ContactCard from "./ContactCard";
import { socialMedia } from "@/constant/constant";

const ContactList = () => {
  const filteredSocialMedia = socialMedia?.filter((social) => social?.isShow);

  return (
    <div className="flex flex-col space-y-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredSocialMedia.map((media) => (
          <ContactCard key={media.title} {...media} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;