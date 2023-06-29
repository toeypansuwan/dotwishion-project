import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Dashboard({ auth }) {
    const data = {
        id:1,
        fname:"ฐิติวรรณ",
        lname:"เฮงจำรัส",
        student_id:621310112,
        category_id:1,
        image_hero:"",
        image_profile:"",
        project:{
            name_th:"เว็บแอปพลิเคชันพยากรณ์ราคาหุ้น กลุ่มเทคโนโลยีสารสนเทศและการสื่อสาร",
            name_en:"Design and Development of Physical and Sexual Crimes Alert Application",
            app_name:"Q-Khajorn",
            detail:"แอปพลิเคชั่นที่คุณสามารถค้นหาสินค้า หรือโปรโมชั่นที่ใกล้เคียง และสามารถรับโปรโมชั่น ที่คุณต้องการผ่านระบบ QR CODE เพื่อนำไปรับโปรโมชั่นที่ ร้านค้าที่ต้องการได้ เพื่ออำนวยสะดวกสบายให้คุณ",
            type:"website",
            functions:[
                {title:"Shop Management",detail:"จัดการร้านค้า สามารถเพิ่มลบหรือแก้ไข สินค้าและโปรโมชันในร้านได้"},
                {title:"Shop Management",detail:"จัดการร้านค้า สามารถเพิ่มลบหรือแก้ไข สินค้าและโปรโมชันในร้านได้"},
                {title:"Shop Management",detail:"จัดการร้านค้า สามารถเพิ่มลบหรือแก้ไข สินค้าและโปรโมชันในร้านได้"}
            ],
            advisor:"KACHORNPON Hiranchotepaisan",
            video_showreel:"",
            video_demo:"",
            video_other:"",
            linkedin_url:"",
            email:"",
            portfolio_url:"",
            
        },

        
    }
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in! test
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
