import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';


const Header = () => {

  return (
    <>
      <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid className='navbar-container'>
          <MDBNavbarBrand href='#'>
            <img src='\images\logo.png' height={30}/>
          </MDBNavbarBrand>
          
          <MDBCollapse navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Collection</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Contact</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            
            <MDBIcon fab icon='twitter' />
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );

};

export default Header;
