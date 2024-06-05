import * as Yup from "yup";

export const PostSchema = Yup.object().shape({
    // phoneNumber: Yup.string()
    //     .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    //     .required("Phone Number Must be Required..!"),
    userName: Yup.mixed().required("userName Must be Required..!"),
    sport: Yup.mixed().required("sport Must be Required..!"),
    matchDetails: Yup.mixed().required("match Details Must be Required..!"),
    matchDate: Yup.mixed().required("match Date Must be Required..!"),
    betAmount: Yup.mixed().required("bet Amount  Must be Required..!"),
    placeOfMatch: Yup.mixed().required("place Of Match  Must be Required..!"),
    image: Yup.mixed().required("Image Must be Required..!"),
    phoneNumber: Yup.mixed().required("Phone Number Must be Required..!"),

});
