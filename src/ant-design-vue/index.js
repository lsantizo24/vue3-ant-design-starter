import { Form, Input, Button, Layout,Menu, Row, Col,
    Dropdown, Avatar, Tabs, Table, Alert, Card, List, 
    Pagination, Divider,Popconfirm, Modal, Select, 
    Breadcrumb, Carousel,Image} from 'ant-design-vue';

const components= [
Form,
Input,
Button,
Layout,
Menu,
Row,
Col,
Dropdown,
Avatar,
Tabs,
Table,
Alert,
Card,
List,
Pagination,
Divider,
Popconfirm,
Modal,
Select,
Breadcrumb,
Carousel,
Image
]
export function setupAntd(app) {
components.forEach(component => {
    app.use(component)
  })
}