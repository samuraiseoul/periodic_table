import PeriodicTable from "./src/components/periodicTable";
import PageHeader from "./src/components/pageHeader";
import AboutUs from "./src/components/aboutUs";
import ContactUs from "./src/components/contactUs";
import FrequentlyAskedQuestions from "./src/components/frequentlyAskedQuestions";
import GetInvolved from "./src/components/getInvolved";
import PageFooter from "./src/components/pageFooter";
import PeriodicTableElement from "./src/components/periodicTableElement";
import TableLegend from "./src/components/tableLegend";
import TableTitle from "./src/components/tableTitle";
import ElementModal from "./src/components/elementModal";
import CircleKey from "./src/components/keys/circleKey";
import TriangleKey from "./src/components/keys/triangleKey";
import OctagonKey from "./src/components/keys/octagonKey";
import FirstRow from "./src/components/rows/firstRow";
import SecondRow from "./src/components/rows/secondRow";
import ThirdRow from "./src/components/rows/thirdRow";
import FourthRow from "./src/components/rows/fourthRow";
import FifthRow from "./src/components/rows/fifthRow";
import SixthRow from "./src/components/rows/sixthRow";
import SeventhRow from "./src/components/rows/seventhRow";
import EighthRow from "./src/components/rows/eighthRow";
import NinthRow from "./src/components/rows/ninthRow";
import TenthRow from "./src/components/rows/tenthRow";
import EleventhRow from "./src/components/rows/eleventhRow";
import TriggerWarning from "./src/components/triggerWarning";
import SocialLink from "./src/components/socialLink";
import MessageForm from "./src/components/messageForm";

window.customElements.define('page-header', PageHeader);

window.customElements.define('table-title', TableTitle);
window.customElements.define('circle-key', CircleKey);
window.customElements.define('triangle-key', TriangleKey);
window.customElements.define('octagon-key', OctagonKey);
window.customElements.define('table-legend', TableLegend);
window.customElements.define('periodic-table-element', PeriodicTableElement);
window.customElements.define('element-modal', ElementModal);
window.customElements.define('trigger-warning', TriggerWarning);
window.customElements.define('first-row', FirstRow);
window.customElements.define('second-row', SecondRow);
window.customElements.define('third-row', ThirdRow);
window.customElements.define('fourth-row', FourthRow);
window.customElements.define('fifth-row', FifthRow);
window.customElements.define('sixth-row', SixthRow);
window.customElements.define('seventh-row', SeventhRow);
window.customElements.define('eighth-row', EighthRow);
window.customElements.define('ninth-row', NinthRow);
window.customElements.define('tenth-row', TenthRow);
window.customElements.define('eleventh-row', EleventhRow);
window.customElements.define('periodic-table', PeriodicTable);

window.customElements.define('social-link', SocialLink);
window.customElements.define('message-form', MessageForm);

window.customElements.define('about-us', AboutUs);
window.customElements.define('contact-us', ContactUs);
window.customElements.define('get-involved', GetInvolved);
window.customElements.define('frequently-asked-questions', FrequentlyAskedQuestions);

window.customElements.define('page-footer', PageFooter);