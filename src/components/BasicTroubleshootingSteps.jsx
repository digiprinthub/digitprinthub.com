import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faCog,
  faPrint,
  faExclamationTriangle,
  faInfoCircle,
  faLaptop,
  faMobileAlt,
  faTint,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

const PrinterSetupGuide = () => {
  const [selectedIssue, setSelectedIssue] = useState("");

  const issueOptions = [
    { value: "", label: "Select an issue" },
    { value: "fatal", label: "Critical Printer Error" },
    { value: "wifi", label: "Wi-Fi Connection Issues" },
    { value: "device", label: "Connecting to Devices" },
    { value: "quality", label: "Print Quality Problems" },
    { value: "paper", label: "Paper Feed Issues" },
    { value: "ink", label: "Ink or Toner Problems" },
    { value: "other", label: "Other Technical Issues" },
  ];

  const renderIssueContent = () => {
    switch (selectedIssue) {
      case "fatal":
        return (
          <div className="alert alert-danger">
            <h4 className="alert-heading">Critical Printer Error</h4>
            <ol>
              <li>
                <strong>Power cycle the printer.</strong>
                <p>
                  Turn off the printer, unplug it from the power source, and
                  wait for 60 seconds before reconnecting and powering it back
                  on.
                </p>
              </li>
              <li>
                <strong>Check for error messages.</strong>
                <p>
                  Review the printer’s display panel for any codes or alerts and
                  consult the user manual for specific troubleshooting steps.
                </p>
              </li>
              <li>
                <strong>Verify all connections.</strong>
                <p>
                  Ensure power and data cables are securely attached to avoid
                  connectivity issues.
                </p>
              </li>
              <li>
                <strong>Seek manufacturer support.</strong>
                <p>
                  If the issue persists, visit the manufacturer’s official
                  support website (e.g.,{" "}
                  <a
                    href="https://support.hp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HP Support
                  </a>
                  ) for model-specific assistance.
                </p>
              </li>
            </ol>
          </div>
        );

      case "wifi":
        return (
          <div className="alert alert-info">
            <h4 className="alert-heading">Wi-Fi Connection Issues</h4>
            <ol>
              <li>
                <strong>Access the printer’s network settings.</strong>
                <p>
                  Use the printer’s control panel to locate the network or
                  wireless menu.
                </p>
              </li>
              <li>
                <strong>Select your Wi-Fi network.</strong>
                <p>
                  Choose your network from the list of available options
                  displayed on the printer.
                </p>
              </li>
              <li>
                <strong>Enter the network password.</strong>
                <p>
                  Input the Wi-Fi password carefully, ensuring correct case
                  sensitivity.
                </p>
              </li>
              <li>
                <strong>Contact manufacturer support if needed.</strong>
                <p>
                  If connectivity fails, refer to the printer’s manual or visit
                  the manufacturer’s support page, such as{" "}
                  <a
                    href="https://support.hp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HP Support
                  </a>
                  .
                </p>
              </li>
            </ol>
          </div>
        );

      case "device":
        return (
          <div className="alert alert-info">
            <h4 className="alert-heading">Connecting to Devices</h4>
            <ol>
              <li>
                <strong>Confirm network compatibility.</strong>
                <p>
                  Ensure the printer and device (laptop or smartphone) are on
                  the same Wi-Fi network.
                </p>
              </li>
              <li>
                <strong>Install necessary software.</strong>
                <p>
                  Download the printer driver or app from the manufacturer’s
                  official website or app store.
                </p>
              </li>
              <li>
                <strong>Test the connection.</strong>
                <p>Print a sample page to verify successful setup.</p>
              </li>
              <li>
                <strong>Visit support if issues persist.</strong>
                <p>
                  For additional help, consult the manufacturer’s support site,
                  such as{" "}
                  <a
                    href="https://support.hp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    HP Support
                  </a>
                  .
                </p>
              </li>
            </ol>
          </div>
        );

      case "quality":
        return (
          <div className="alert alert-warning">
            <h4 className="alert-heading">Print Quality Problems</h4>
            <ol>
              <li>
                <strong>Perform a cleaning cycle.</strong>
                <p>
                  Use the printer’s maintenance menu to clean the print heads
                  and improve output.
                </p>
              </li>
              <li>
                <strong>Align print heads.</strong>
                <p>
                  Run the alignment feature from the printer’s settings to
                  enhance clarity.
                </p>
              </li>
              <li>
                <strong>Check paper settings.</strong>
                <p>
                  Ensure the paper type selected in the printer settings matches
                  the loaded media.
                </p>
              </li>
            </ol>
          </div>
        );

      case "paper":
        return (
          <div className="alert alert-warning">
            <h4 className="alert-heading">Paper Feed Issues</h4>
            <ol>
              <li>
                <strong>Power off the printer.</strong>
                <p>
                  Turn off and unplug the printer before addressing any paper
                  issues.
                </p>
              </li>
              <li>
                <strong>Remove stuck paper.</strong>
                <p>
                  Gently clear any jammed paper from the printer’s feed path.
                </p>
              </li>
              <li>
                <strong>Inspect for debris.</strong>
                <p>
                  Check for small fragments that may cause recurring problems.
                </p>
              </li>
            </ol>
          </div>
        );

      case "ink":
        return (
          <div className="alert alert-warning">
            <h4 className="alert-heading">Ink or Toner Problems</h4>
            <ol>
              <li>
                <strong>Verify cartridge installation.</strong>
                <p>
                  Ensure ink or toner cartridges are correctly seated in their
                  slots.
                </p>
              </li>
              <li>
                <strong>Clean cartridge contacts.</strong>
                <p>
                  Wipe the contact points with a dry, lint-free cloth to remove
                  debris.
                </p>
              </li>
              <li>
                <strong>Replace if necessary.</strong>
                <p>
                  Install new cartridges if the current ones are depleted or
                  malfunctioning.
                </p>
              </li>
            </ol>
          </div>
        );

      case "other":
        return (
          <div className="alert alert-warning">
            <h4 className="alert-heading">Other Technical Issues</h4>
            <p>
              For additional troubleshooting, consult your printer’s user manual
              or visit the manufacturer’s support website, such as{" "}
              <a
                href="https://support.hp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                HP Support
              </a>
              , for detailed guidance specific to your device.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="container my-5">
      <h1 className="display-4 mb-4 text-center">
        Printer Setup and Troubleshooting Guide
      </h1>

      <div className="row">
        <div className="col-lg-8 mx-auto">
          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title h4">Troubleshooting Common Issues</h2>
              <select
                className="form-select mb-3"
                value={selectedIssue}
                onChange={(e) => setSelectedIssue(e.target.value)}
              >
                {issueOptions.map((option, index) => (
                  <option key={index} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              {renderIssueContent()}
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title h4">
                <FontAwesomeIcon
                  icon={faInfoCircle}
                  className="me-2 text-info"
                />
                General Printer Setup Instructions
              </h2>
              <ol className="card-text">
                <li>
                  <strong>Unpack the Printer:</strong>
                  <p>
                    Remove the printer from its packaging, eliminating all
                    protective materials such as tape and foam inserts.
                  </p>
                </li>
                <li>
                  <strong>Connect to Power:</strong>
                  <p>
                    Attach the power cord to the printer and a wall outlet, then
                    press the power button to turn it on.
                  </p>
                </li>
                <li>
                  <strong>Install Ink or Toner:</strong>
                  <p>
                    Open the cartridge access area, insert the ink or toner
                    cartridges into their designated slots, and secure the
                    cover.
                  </p>
                </li>
                <li>
                  <strong>Load Paper:</strong>
                  <p>
                    Adjust the paper tray guides and insert paper, ensuring it
                    aligns properly before closing the tray.
                  </p>
                </li>
                <li>
                  <strong>Install Software:</strong>
                  <p>
                    Download the appropriate driver from the manufacturer’s
                    website and follow the installation prompts.
                  </p>
                </li>
                <li>
                  <strong>Establish Network Connection:</strong>
                  <p>
                    Use the printer’s control panel to connect to a Wi-Fi
                    network or attach an Ethernet cable for a wired setup.
                  </p>
                </li>
                <li>
                  <strong>Print a Test Page:</strong>
                  <p>
                    Send a test document from a connected device to confirm the
                    printer is functioning correctly.
                  </p>
                </li>
              </ol>
              <p>
                If setup fails, refer to your printer’s manual or visit the
                manufacturer’s support site, such as{" "}
                <a
                  href="https://support.hp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HP Support
                </a>
                .
              </p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title h4">
                <FontAwesomeIcon icon={faWifi} className="me-2 text-primary" />
                Wi-Fi Connection Guide
              </h2>
              <ol className="card-text">
                <li>
                  Access the printer’s network menu via the control panel.
                </li>
                <li>Select the wireless setup option and scan for networks.</li>
                <li>Choose your Wi-Fi network and enter the password.</li>
                <li>Allow time for the connection to establish.</li>
                <li>Print a network status page to confirm connectivity.</li>
              </ol>
              <p>
                For persistent issues, consult the manufacturer’s support
                resources, such as{" "}
                <a
                  href="https://support.hp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HP Support
                </a>
                .
              </p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title h4">
                <FontAwesomeIcon
                  icon={faLaptop}
                  className="me-2 text-success"
                />
                <FontAwesomeIcon
                  icon={faMobileAlt}
                  className="me-2 text-success"
                />
                Device Connection Guide
              </h2>
              <h3 className="h5">Laptop:</h3>
              <ol className="card-text">
                <li>Ensure both devices share the same network.</li>
                <li>
                  Download and install the printer driver from the
                  manufacturer’s site.
                </li>
                <li>Add the printer through the setup wizard.</li>
                <li>Print a test page to verify the connection.</li>
              </ol>
              <h3 className="h5">Smartphone:</h3>
              <ol className="card-text">
                <li>Install the printer’s mobile app from your app store.</li>
                <li>Use the app to locate and add the printer.</li>
                <li>Test the setup by printing from your phone.</li>
              </ol>
              <p>
                If unsuccessful, visit the manufacturer’s support page, e.g.,{" "}
                <a
                  href="https://support.hp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HP Support
                </a>
                .
              </p>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title h4">
                <FontAwesomeIcon icon={faTint} className="me-2 text-danger" />
                Ink and Toner Management
              </h2>
              <ul className="card-text">
                <li>Use cartridges compatible with your printer model.</li>
                <li>
                  Store extras in a cool, dry location away from sunlight.
                </li>
                <li>Run periodic cleaning cycles to maintain print quality.</li>
                <li>Opt for draft mode to conserve ink on routine prints.</li>
              </ul>
            </div>
          </div>

          <div className="card mb-4">
            <div className="card-body">
              <h2 className="card-title h4">
                <FontAwesomeIcon icon={faPrint} className="me-2 text-warning" />
                Enhancing Print Quality
              </h2>
              <ol className="card-text">
                <li>Select the appropriate paper type in print settings.</li>
                <li>Regularly align print heads via the maintenance menu.</li>
                <li>Clean print heads if output quality declines.</li>
                <li>
                  Use high-quality paper for critical documents or images.
                </li>
              </ol>
            </div>
          </div>

          <div className="alert alert-warning" role="alert">
            <h4 className="alert-heading">Disclaimer</h4>
            <p className="mb-0">
              This guide offers general information on printer setup and
              troubleshooting and is provided by an independent printer seller.
              We are not affiliated with, endorsed by, or connected to any
              printer manufacturer. For detailed, model-specific assistance or
              official support, please consult your printer’s user manual or
              visit the manufacturer’s official support website, such as{" "}
              <a
                href="https://support.hp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                HP Support
              </a>
              . All trademarks and brand names mentioned are the property of
              their respective owners and are used for informational purposes
              only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrinterSetupGuide;
