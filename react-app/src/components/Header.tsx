interface Props {
    heading: string;
}

function Header({heading}: Props) {

  return (
    <>
    <header className="header">
        <h1>{ heading }</h1>
    </header>
    </>
  )
}

export default Header;