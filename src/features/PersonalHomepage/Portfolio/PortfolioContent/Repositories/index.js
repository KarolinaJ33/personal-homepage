import { List, ListItem, Header, Description, Span, Link } from "./styled"

export const Repositories = ({ portfolio }) => (
    <List>
        {portfolio.map(({ id, name, description, homepage, html_url }) => (
            <ListItem key={id}>
                <Header>{name}</Header>
                <Description>{description}</Description>
                {!!homepage && (
                   <Span>
                       <dt>Demo:</dt>
                       <Link href={homepage} target="_blank" rel="noreferrer">Demo
                       </Link>
                   </Span>
                )}
                   <Span>
                       <dt>Code:</dt>
                       <Link href={html_url} target="_blank" rel="noreferrer">Link
                       </Link>
                   </Span>
            </ListItem>
        ))}

    </List>
);

