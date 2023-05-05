<template>
    <div class="backdrop" @click.self="closeTerms">
        <div class="container">
            <img v-if="closehover" @click="closeTerms" id="close" src="../assets/closeoverlay.svg" @mouseover="closehover=!closehover" >
            <img v-else @click="closeTerms" id="close" src="../assets/closehover.svg" @mouseout="closehover=!closehover" >
            <img src="../assets/gavel.svg">
            <h1>Terms and Conditions</h1>
            <h2>Thank you for your interest in using BUMP, a platform for connecting and engaging with gamers in a safe and
                fun environment. Before using our platform, please carefully read and agree to the following terms and
                conditions:</h2>
            <div class="termscroll">
                <p>Eligibility:<br>
                    You must be at least 16 years old to use BUMP or have the legal capacity to enter into a binding
                    agreement. By accessing or using our platform, you represent and warrant that you meet these eligibility
                    requirements.</p>
                <p>User Content:<br>
                    BUMP allows users to upload and share content, including text, images, videos, and
                    other materials. By uploading any content on our platform, you grant BUMP a non-exclusive, worldwide,
                    royalty-free, transferable, and sublicensable license to use, reproduce, modify, adapt, publish,
                    translate,
                    distribute, and display such content. You represent and warrant that you have all necessary rights and
                    permissions to upload and share such content and that it does not infringe upon any third party's
                    intellectual
                    property rights or violate any applicable laws or regulations.</p>
                <p>Prohibited Conduct:<br>
                    You agree not to engage in any of the following prohibited conduct while using BUMP:<br>
                    - Harassing, threatening, or stalking other users<br>
                    - Posting or sharing any content that is false, misleading, defamatory, or offensive<br>
                    - Engaging in any activity that violates any applicable laws or regulations<br>
                    - Impersonating another person or entity- Interfering with or disrupting BUMP's servers or networks<br>
                    - Using any automated system or software to access BUMP or its services<br>
                    - Collecting or harvesting any information from BUMP or other users without their consent<br>
                    - User Accounts<br>
                    - To use BUMP, you must create an account and provide accurate and complete information.<br>
                    You are solely responsible for maintaining the confidentiality of your account information and for any
                    activity that occurs under your account.
                    You agree to notify BUMP immediately if you suspect any unauthorized access to your account.</p>
                <p>Disclaimer of Warranties:<br>
                    BUMP provides its platform on an "as is" and "as available" basis without any warranties of any kind,
                    whether express or implied. We do not guarantee that BUMP will always be available, uninterrupted, or
                    error-free. We are not responsible for any loss, damage, or harm that may arise from your use of BUMP.
                </p>
                <p>Limitation of Liability:<br>
                    In no event shall BUMP, its directors, officers, employees, or agents be liable for any direct,
                    indirect, incidental, special, or consequential damages arising out of or in connection with your use of
                    BUMP or
                    inability to use BUMP, including but not limited to, damages for loss of profits, goodwill, use, data,
                    or
                    other
                    intangible losses, even if BUMP has been advised of the possibility of such damages.</p>
                <p>Indemnification:<br>
                    You agree to indemnify and hold harmless BUMP, its directors, officers, employees, and agents from and
                    against any and all
                    claims, damages, liabilities, costs, and expenses, including reasonable attorneys' fees, arising out of
                    or
                    in
                    connection with your use of BUMP or violation of these terms and conditions.</p>
                <p>Governing Law and Dispute Resolution<br>
                    These terms and conditions shall be governed by and construed in accordance with the laws of Israel.
                    Any disputes arising out of or in connection with these terms and conditions shall be resolved through
                    binding
                    arbitration in accordance with the rules of the Israeli Arbitration Association.</p>
                <p>Changes to Terms and Conditions:<br>
                    BUMP reserves the right to modify these terms and conditions at any time without prior notice. By
                    continuing to use BUMP after such modifications, you agree to be bound by the revised terms and
                    conditions.</p>
                <p>Termination:<br>
                    BUMP may terminate or suspend your access to our platform at any time, without prior
                    notice, for any reason or no reason at all. Upon termination, you must cease all use of BUMP and any
                    materials
                    obtained from BUMP.</p>
                <p>Entire Agreement:<br>
                    These terms and conditions constitute the entire agreement between you and
                    BUMP regarding your use of our platform and supersede all prior or contemporaneous communications and
                    proposals,
                    whether oral or written, between you and BUMP.
                    By using BUMP, you agree to be bound by these terms and conditions.
                    If you do not agree to these terms and conditions, please do not use BUMP.</p>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            closehover: true
        }
    },
    props:
        ['showTerms'],
    methods: {
        closeTerms() {
            this.$emit('closeT')
        }
    }
}

</script>

<style scoped>
.container {
  position: absolute;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  height: 60%;
  width: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #2C394B;
  border: 1px solid #323244;
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
}

.container #close {
  position: fixed;
  right: 8px;
  top: 10px;
  width: 20px;
  cursor: pointer;
  fill: #E54425;
}

.container img {
  width: 5%;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.692);
  width: 100%;
  height: 100%;
}

.container h1 {
  color: var(--white);
  text-align: left;
  font-size: 25px;
}

.container h2 {
  text-align: left;
  margin: 0;
  margin-bottom: 10px;
}

.container p {
  color: var(--white);
  text-align: left;
  font-size: 13px;
}

.container .termscroll {
  overflow-y: scroll;
  height: 100%;
  width: 100%;
  padding-right: 10px;
}

::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: var(--main);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--main);
}

h1 {
  margin-bottom: 5px;
}
</style>