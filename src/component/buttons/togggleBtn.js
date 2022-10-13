import { Switch } from 'antd';
function ToggleBtn(){
const onChange = (checked) => {
    console.log(`switch to ${checked}`);
};
return (
    <div>
        <Switch defaultChecked onChange={onChange} />
    </div>
)
}
export default ToggleBtn;