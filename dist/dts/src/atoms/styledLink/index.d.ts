declare type StyledLinkProps = {
    title: string;
    url: string;
    target?: string;
};
declare const StyledLink: ({ title, url, target }: StyledLinkProps) => JSX.Element;
export default StyledLink;
