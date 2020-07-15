import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

import 'DefaultScreen.dart';

import '../helpers/styling.dart';
import '../helpers/constants.dart';
import '../helpers/classes.dart';

import '../widgets/MusicWidget.dart';

Widget HomeScreenButton(
    {Function onPressed,
    String text,
    String bgImagePath = '',
    Color bgColor = Colors.white,
    Alignment textAlignment = Alignment.bottomCenter,
    double height = 300,
    double width = 500,
    double textPaddingBottomDivider = 8,
    double fontSize = 20}) {
  double textPaddingBottom = height / textPaddingBottomDivider;

  Widget buttonText = Container(
      alignment: textAlignment,
      child: Text(
        text,
        style: TextStyle(
          fontSize: fontSize,
        ),
      ),
      padding: textAlignment == Alignment.bottomCenter
          ? EdgeInsets.only(bottom: textPaddingBottom)
          : EdgeInsets.only(
              left: width / 10,
              bottom: textPaddingBottom,
            ));

  Widget button = bgImagePath != ''
      ? GestureDetector(
          child: Container(
            decoration: BoxDecoration(
              color: Colors.black,
              image: DecorationImage(
                image: AssetImage(bgImagePath),
                fit: BoxFit.cover,
              ),
              borderRadius: BorderRadius.circular(18.0),
            ),
            child: buttonText,
          ),
          onTap: onPressed,
        )
      : RaisedButton(
          onPressed: onPressed,
          child: buttonText,
          shape: RoundedBorder(),
          color: bgColor,
        );

  return button;
}

class HomeScreen extends StatelessWidget {
  static String screenRoute = '/home';

  @override
  Widget build(BuildContext context) {
    ScreenWidth = MediaQuery.of(context).size.width;
    ScreenHeight = MediaQuery.of(context).size.height;

    SafeAreaHeight = MediaQuery.of(context).padding.top;

    final MenuHeight = ScreenHeight - AppBarHeight - SafeAreaHeight - BottomOffset;
    final double RowHeight = MenuHeight / 3;
    final double AfterRowColumnChildrenHeight = MenuHeight - RowHeight;

    final double SpaceBetweenRows = 15.0;

    final double PaddingHorizontal = 20.0;

    return DefaultStatelessScreen(
      appBarWidget: Image.asset(
        'assets/images/logo_text.png',
        fit: BoxFit.contain,
      ),
      body: Padding(
        padding: EdgeInsets.symmetric(
          vertical: 15.0,
          horizontal: PaddingHorizontal,
        ),
        child: SizedBox(
          height: MenuHeight,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              ConstrainedBox(
                constraints: BoxConstraints(
                  maxHeight: RowHeight,
                ),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    MusicWidget(),
                    TransparentDivider(),
                    ConstrainedBox(
                      constraints: BoxConstraints(
                        maxWidth: ScreenWidth / 2 - 2 * PaddingHorizontal,
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          Expanded(
                            child: HomeScreenButton(
                              onPressed: () {},
                              text: 'Photos',
                              height: RowHeight,
                              bgColor: HexColor('711010'),
                            ),
                          ),
                          TransparentDivider(space: SpaceBetweenRows),
                          Expanded(
                            child: HomeScreenButton(
                              onPressed: () {},
                              text: 'Films',
                              height: RowHeight,
                              bgColor: HexColor('420f2b'),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
              TransparentDivider(space: SpaceBetweenRows),
              ConstrainedBox(
                constraints: BoxConstraints(
                  maxHeight:
                      AfterRowColumnChildrenHeight - 3 * SpaceBetweenRows,
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Expanded(
                      child: HomeScreenButton(
                        onPressed: () {},
                        text: 'Games',
                        textAlignment: Alignment.bottomLeft,
                        height: RowHeight,
                        bgColor: HexColor('63457b'),
                      ),
                    ),
                    TransparentDivider(space: SpaceBetweenRows),
                    Expanded(
                      child: HomeScreenButton(
                        onPressed: () {},
                        text: '3D Space',
                        textAlignment: Alignment.bottomLeft,
                        height: RowHeight,
                        bgColor: HexColor('2d3965'),
                      ),
                    ),
                    TransparentDivider(space: SpaceBetweenRows),
                    Expanded(
                      child: HomeScreenButton(
                        onPressed: () {},
                        text: 'XR',
                        textAlignment: Alignment.bottomLeft,
                        height: RowHeight,
                        bgColor: HexColor('426418'),
                        textPaddingBottomDivider: 4,
                        fontSize: 25,
                      ),
                      flex: 2,
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
