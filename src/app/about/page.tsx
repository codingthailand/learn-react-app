import AppFooter from "@/components/app-footer";
import UserProfile from "@/components/user-profile"

export default function About() {
    return (
        <div>
            <h1 className="app-hero">About Page</h1>
            <UserProfile />
            <p className="text-orange-600 text-3xl">This is the about page of our application.</p>
            <hr />
            <AppFooter title="About" isShowDate={true} />
        </div>
    );
}