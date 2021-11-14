import React, { useState } from 'react';
import { Signup, SVGcheckbox } from '../components';
import { useForm } from '../hooks/useForm';
import { utilityURL } from './../utils/siteImagesURL';

const SignupContainer = ({ siteData }) => {

    const { signup: { step_1, step_2 } } = siteData;

    const [color, setColor] = useState(false);
    const [formValues, handleInputChange, onClickInputChange] = useForm({
        email: "",
        offers: false,
    });

    const [step, setStep] = useState(1);

    const changeColor = () => {
        setColor(!color);
        onClickInputChange(!color);
    };

    const nextStep = () => {
        setStep(c => c + 1);
    };

    return (
        <Signup>
            <Signup.LogoLink to="/">
                <Signup.Picture>
                    <Signup.Logo src={utilityURL[0]['src']} alt={utilityURL[0]['alt']} />
                </Signup.Picture>
            </Signup.LogoLink>

            <Signup.Form>

                {/* STEP 1 */}
                {
                    (step === 1) && (
                        <>
                            <Signup.Step>{step_1.step_label}</Signup.Step>

                            <Signup.Title>{step_1.title}</Signup.Title>

                            <Signup.Input
                                type="email"
                                name="email"
                                value={formValues.email}
                                onChange={handleInputChange}
                                placeholder={step_1.form.placeholder}
                            />

                            <Signup.CheckboxGroup>
                                <Signup.Checkbox
                                    type="checkbox"
                                    name="offers"
                                    value={formValues.offers}
                                    checked={formValues.offers}
                                    readOnly
                                />

                                <Signup.Span onClick={() => { changeColor() }} chkColor={color ? 'true' : 'false'}><SVGcheckbox /></Signup.Span>
                                <Signup.Label>{step_1.offers}</Signup.Label>
                            </Signup.CheckboxGroup>

                            <Signup.Group>
                                <Signup.Text>{step_1.privacy_1}</Signup.Text>
                                <Signup.Text>{step_1.privacy_2}</Signup.Text>
                                <Signup.Button type="button" onClick={nextStep}>{step_1.form.button}</Signup.Button>
                            </Signup.Group>
                        </>
                    )
                }

                {/* STEP 2 */}
                {
                    (step === 2) && (
                        <>
                            <Signup.Step>{step_2.step_label}</Signup.Step>

                            <Signup.Title>{step_2.title}</Signup.Title>
                        </>
                    )
                }

            </Signup.Form>
        </Signup>
    )
}

export default SignupContainer;
