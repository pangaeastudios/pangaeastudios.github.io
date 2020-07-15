import 'package:flutter/material.dart';
import 'package:pangaea_studios_app/helpers/styling.dart';
import 'package:pangaea_studios_app/screens/HomeScreen.dart';

Widget LoginTextField({String hintText}) => TextField(
  textAlignVertical: TextAlignVertical.center,
  maxLines: 1,
  style: TextStyle(
    fontSize: 15,
    color: Colors.white,
  ),
  decoration: InputDecoration(
    contentPadding: EdgeInsets.only(left: 20),
    fillColor: Colors.grey,
    filled: true,
    hintText: hintText,
    hintStyle: TextStyle(
      color: Colors.white,
    ),
    border: new OutlineInputBorder(
      borderRadius: BorderRadius.circular(30.0),
    ),
  ),
);

FlatButton AccountButton({Function onPressed, String text}) => FlatButton(
      onPressed: onPressed,
      child: Text(
          text,
        style: TextStyle(
          fontSize: 20,
        ),
      ),
    );

class LoginScreen extends StatelessWidget {
  static String screenRoute = '/login';

  @override
  Widget build(BuildContext context) {
    final Widget usernameTextField = LoginTextField(hintText: 'Username');
    final Widget passwordTextField = LoginTextField(hintText: 'Password');

    return SafeArea(
      child: Scaffold(
        resizeToAvoidBottomPadding: false,
        body: Padding(
          padding: const EdgeInsets.symmetric(
            vertical: 50,
            horizontal: 50,
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Image.asset(
                'assets/images/logo_text.png',
                scale: 0.7,
              ),
              TransparentDivider(space: 50.0),
              usernameTextField,
              TransparentDivider(),
              passwordTextField,
              TransparentDivider(),
              AccountButton(
                onPressed: () {
                  Navigator.pushNamed(context, HomeScreen.screenRoute);
                },
                text: 'Login',
              ),
              Image.asset('assets/images/logo_notext.png'),
              AccountButton(
                  onPressed: () {
                    Navigator.pushNamed(context, HomeScreen.screenRoute);
                  },
                  text: 'Create an account'),
            ], //todo: make it a form
          ),
        ),
      ),
    );
  }
}
