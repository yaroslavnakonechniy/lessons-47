import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/lyaout/Layout";
import { LoginPage } from "../components/login/LoginPage";
import { OpenForms } from "../components/openForms/OpenForms";
import { RegistrationForm } from "../components/form/Form";
import { RegistrationFormOnHookForm } from "../components/formOnHookForm/Form";
import { ProtectedRouter } from "../auth/ProtectedRouter";

export const router = createBrowserRouter([
    {
        Component: Layout,
        children: [
            {
                path: "/",
                Component: OpenForms,
                children: [
                    {
                        Component: ProtectedRouter,
                        children: [
                            {
                                path: "formik",
                                Component: RegistrationForm
                            },
                            {
                                path: "hookForm",
                                Component: RegistrationFormOnHookForm
                            }
                        ]
                    }

                ]
            }
        ]
    },
    {
        path: "/login",
        Component: LoginPage
    }
])