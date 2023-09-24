<template>
    <CoreSection id="contact">
        <CoreHeading>Let's talk</CoreHeading>

        <v-col cols="12" md="5" class="mb-4 pr-md-5">
            <CoreSubheading class="text-uppercase">
                What can I do for you?
            </CoreSubheading>

            <CoreText class="mb-5">
                {{ schema.basics.contact }}
            </CoreText>

            <CoreSubheading class="text-uppercase mb-3">
                Send me a Message
            </CoreSubheading>

            <validation-observer ref="observer" v-slot="{ invalid }">
                <v-form @submit.prevent="submit">
                    <validation-provider v-slot="{ errors }" name="name" rules="required|">
                        <v-text-field v-model="name" :error-messages="errors" solo-inverted flat label="Name" required />
                    </validation-provider>

                    <validation-provider v-slot="{ errors }" name="email" rules="required|email">
                        <v-text-field v-model="email" :error-messages="errors" solo-inverted flat label="Email" required />
                    </validation-provider>

                    <validation-provider v-slot="{ errors }" name="subject" rules="required">
                        <v-text-field v-model="subject" :error-messages="errors" solo-inverted flat label="Subject"
                            required />
                    </validation-provider>

                    <validation-provider v-slot="{ errors }" name="message" rules="required">
                        <v-textarea v-model="message" :error-messages="errors" solo auto-grow flat label="Message"
                            required />
                    </validation-provider>

                    <v-btn :disabled="invalid" :loading="loading" type="submit" class="ma-0" color="primary"> Contact Me
                    </v-btn>
                </v-form>
            </validation-observer>
        </v-col>

        <v-col cols="12" md="4" class="text-left">
            <CoreSubheading class="text-uppercase">
                Social Contacts
            </CoreSubheading>

            <SocialContacts />

            <v-list class="transparent" three-line>
                <v-list-item>
                    <v-list-item-avatar tile class="mr-5">
                        <v-icon color="primary" size="48"> mdi-map-marker </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="primary--text">
                            Address
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            {{ schema.basics.location.address }}<br />
                            {{ schema.basics.location.postalCode }}
                            {{ schema.basics.location.city }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-avatar tile class="mr-5">
                        <v-icon size="48" color="primary"> mdi-email </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="primary--text"> Email </v-list-item-title>
                        <v-list-item-subtitle v-text="schema.basics.email" />
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-avatar tile class="mr-5">
                        <v-icon size="48" color="primary"> mdi-phone </v-icon>
                    </v-list-item-avatar>
                    <v-list-item-content>
                        <v-list-item-title class="primary--text"> Phone </v-list-item-title>
                        <v-list-item-subtitle v-text="schema.basics.phone" />
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-col>
    </CoreSection>
</template>
  
<script>
import CoreSection from "@/components/home/core/Section.vue"
import CoreHeading from "@/components/home/core/Heading.vue"
import CoreSubheading from "@/components/home/core/SubHeading.vue"
import CoreText from "@/components/home/core/Text.vue"
import SocialContacts from "@/components/home/other/SocialContacts.vue"

export default {
    name: "Contact",
    components: {
        CoreSection,
        CoreHeading,
        CoreSubheading,
        CoreText,
        SocialContacts,
    },
    data: () => ({
        name: '',
        email: '',
        subject: '',
        message: '',
        loading: false,
        schema: {
            basics: {
                contact: ""
            }
        }
    }),
    methods: {
        async submit() {
            try {
                this.loading = true
                await this.$refs.observer.validate();

                await this.$mail.send({
                    from: 'no-reply@rjrietdijk.com',
                    subject: this.subject,
                    text: 'From: ' + this.email + '\n\n' + this.message,
                    to: 'contact@rjrietdijk.com',
                })

                await this.$notifier.showMessage({ "content": "Success! Email has been send", "color": "success" })
                window.scrollTo(0, 0)
                this.name = ''
                this.email = ''
                this.subject = ''
                this.message = ''
                this.loading = false
            } catch (err) {
                await this.$notifier.showMessage({ "content": "Error! Something went wrong, please try again", "color": "error" })
                this.loading = false
            }
        }
    }
};
</script>
  