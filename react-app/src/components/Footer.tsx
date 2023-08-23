interface Props {
    footer: string;
}

function Footer({footer}: Props) {

  return (
    <>
    <footer className="footer">
        <span>{ footer }{new Date().getFullYear()}</span>
    </footer>
    </>
  )
}

export default Footer;