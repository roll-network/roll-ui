import { useTheme } from "../..";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";
import { ReactComponent as DiscordIcon } from "../../assets/svg/discord.svg";
import { ReactComponent as InstagramIcon } from "../../assets/svg/insta.svg";
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitter.svg";
import { Header, SubHeader } from "../../atoms";
import {
  blogUrl,
  discordInviteUrl,
  faqUrl,
  instaUrl,
  stakingTermsUrl,
  supportEmail,
  twitterUrl,
} from "../../constants";
import { margins } from "../../styles";
import { openLink } from "../../utils/functions";

interface Icon {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  url: string;
}

const icons: Icon[] = [
  {
    Icon: DiscordIcon,
    url: discordInviteUrl,
  },
  {
    Icon: TwitterIcon,
    url: twitterUrl,
  },
  {
    Icon: InstagramIcon,
    url: instaUrl,
  },
];

export const Footer = () => {
  const theme = useTheme();
  return (
    <div
      className="flex flex-col w-full"
      style={{ backgroundColor: theme.backgroundBlue }}
    >
      <div className="flex self-center mt-11 mb-16">
        <div className="flex flex-col self-end">
          <Logo />
          <SubHeader
            color={theme.backgroundPrimary}
            style={margins.mt16}
            onPress={() => openLink(`mailto:${supportEmail}`, true)}
          >
            support@tryroll.com
          </SubHeader>
        </div>
        <div className="flex flex-col mx-32">
          <Header color={theme.backgroundPrimary} weight="bold">
            Company
          </Header>
          <SubHeader
            color={theme.backgroundPrimary}
            style={margins.mv8}
            onPress={() => openLink(blogUrl)}
          >
            Blog
          </SubHeader>
          <SubHeader
            color={theme.backgroundPrimary}
            onPress={() => openLink(faqUrl, true)}
          >
            FAQ
          </SubHeader>
        </div>
        <div className="flex flex-col">
          <Header color={theme.backgroundPrimary} weight="bold">
            Resources
          </Header>
          <SubHeader
            color={theme.backgroundPrimary}
            style={margins.mv8}
            onPress={() => openLink(stakingTermsUrl, true)}
          >
            Protocol Terms
          </SubHeader>
          <SubHeader
            color={theme.backgroundPrimary}
            onPress={() => (location.href = "")}
          >
            Resource Center
          </SubHeader>
        </div>
        <div className="flex flex-col ml-32">
          <Header color={theme.backgroundPrimary} weight="bold">
            Connect with us
          </Header>
          <div className="flex mt-4">
            {icons.map(({ Icon, url }, idx) => (
              <Icon
                key={idx}
                onClick={() => openLink(url, true)}
                className="cursor-pointer mr-6"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
