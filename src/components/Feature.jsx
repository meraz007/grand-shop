import logoFeature from '../assets/img/logo-feature.png'
import FeatureAndTestimonial from "./featureAndTestimonial";

const Feature = () => {
    return (
        <>
        <FeatureAndTestimonial 
            logo={logoFeature} 
            heading={'Title line h2'} 
            text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum augue sed tellus accumsan, nec congue quam lacinia. Duis ornare congue ante a facilisis. Vestibulum sed magna in ligula aliquam luctus non in ante. Nullam egestas, nunc at rutrum tincidunt, purus metus malesuada ante, at cursus massa turpis sit amet nulla. Quisque non ante quis lorem fermentum auctor sed sed ligula. Aenean turpis sapien, efficitur quis placerat at, facilisis bibendum erat. Aliquam quis mattis leo, sed egestas augue. Phasellus vitae vulputate nisi, vitae eleifend enim. Aenean rutrum tristique purus,'}
            btnText={'Learn more'}
        />
        </>
    )
}

export default Feature;