import { List, ListItem, Header, Description, Span, Link } from "./styled";

export const Repositories = ({ portfolio }) => (
    <List>
        {portfolio.map(({ id, name, description, homepage, html_url }) => (
            <ListItem key={id}>
                <Header>{name}</Header>
                <Description>{description}</Description>
                {!!homepage && (
                    <Span>
                        <dt>Demo:</dt>
                        <Link target="_blank" rel="noreferrer" href={homepage}>
                            Project Demo
                        </Link>
                    </Span>
                )}
                <Span>
                    <dt>Code:</dt>
                    <Link target="_blank" rel="noreferrer" href={html_url}>
                        Github Repository
                    </Link>
                </Span>
            </ListItem>
        ))}
    </List>
);
