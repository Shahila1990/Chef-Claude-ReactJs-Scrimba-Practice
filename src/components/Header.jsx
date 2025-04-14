import  chefClaudeLogo from'../images/chef-claude-icon.png';

export default function Header(){
    return(
        <>
            <header className='header'>
                <img src={chefClaudeLogo} alt="chef claude logo" className='header-logo' />
                <h1>Chef Claude</h1>
            </header>
        </>
    )
}