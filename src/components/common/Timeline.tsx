import { TEducation, TExperience } from "@/types/type";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SpotlightCard from "@/components/SpotlightCard";
import GradientText from "@/components/GradientText";
import Image from "next/image";
import { useTranslations } from "next-intl";

type PropsWorkExperience = {
  experience: TExperience;
};
type PropsEducations = {
  education: TEducation;
};
export const Timeline = ({ experience }: PropsWorkExperience) => {
  const t = useTranslations("AboutPage");
  const achievements = t.raw(
    `Experience.Work.${experience.id}.achievements`
  ) as string[];
  return (
    <div className="flex mx-5">
      <div className="relative border-l-2 ml-4">
        <div className="absolute -left-6 top-8 bg-background rounded-full border border-border w-12 h-12 flex items-center justify-center">
          {experience.logo ? (
            <Image
              src={experience.logo}
              alt="Work Experience"
              width={32}
              height={32}
            />
          ) : (
            <BriefcaseBusiness />
          )}
        </div>
      </div>
      <div className="ml-12 flex-1">
        <div className="bg-transparent text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm">
          <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.2)">
            <CardHeader className="gap-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="text-pretty mb-2 flex">
                    <GradientText
                      colors={[
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                      ]}
                      animationSpeed={10}
                      showBorder={false}
                    >
                      {experience.role}
                    </GradientText>
                    <Badge
                      variant="secondary"
                      className="self-start md:self-auto ml-4"
                    >
                      {t(`Experience.Work.${experience.id}.period`)}
                    </Badge>
                  </CardTitle>
                  <CardDescription className="text-pretty font-bold">
                    {experience.company} - {t(`Experience.Work.${experience.id}.location`)}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(`Experience.Work.${experience.id}.summary`)}
              </p>
              {achievements && achievements.length > 0 && (
                <Accordion type="single" collapsible>
                  <AccordionItem value="details">
                    <AccordionTrigger className="text-sm">
                      {t("Experience.Work.responsibilities")}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="list-disc pl-5 space-y-2 text-sm text-foreground">
                        {achievements.map((item, idx) => (
                          <li key={idx} className="text-pretty leading-relaxed">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </CardContent>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};

export const TimelineEducations = ({ education }: PropsEducations) => {
  const t = useTranslations("AboutPage");
  return (
    <div className="flex mx-5">
      <div className="relative border-l-2 ml-4">
        <div className="absolute -left-6 top-8 bg-background rounded-full border border-border w-12 h-12 flex items-center justify-center">
          {education.logo ? (
            <Image
              src={education.logo}
              alt="Work Experience"
              width={32}
              height={32}
            />
          ) : (
            <GraduationCap />
          )}
        </div>
      </div>
      <div className="ml-12 flex-1">
        <div className="bg-transparent text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm">
          <SpotlightCard spotlightColor="rgba(255, 255, 255, 0.2)">
            <CardHeader className="gap-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="text-pretty mb-2 flex">
                    <GradientText
                      colors={[
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                        "#4079ff",
                        "#40ffaa",
                      ]}
                      animationSpeed={10}
                      showBorder={false}
                    >
                      {education.institution}
                    </GradientText>
                    <Badge
                      variant="secondary"
                      className="self-start md:self-auto ml-4"
                    >
                      {education.period}
                    </Badge>
                  </CardTitle>
                  <CardDescription className="text-pretty">
                    {t(`Experience.Educations.${education.id}.location`)}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {t(`Experience.Educations.${education.id}.degree`)}
            </CardContent>
          </SpotlightCard>
        </div>
      </div>
    </div>
  );
};
