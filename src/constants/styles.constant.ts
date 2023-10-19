import { StyleSheet } from 'react-native';


export const GLOBAL_STYLE = StyleSheet.create({
  fill: {
    flex: 1
  },
  brand: {
    fontSize: 40,
    // color: COLORS.white,
  },
  bottomTitles: {
    fontSize: 14,
    // color: COLORS.white,
    marginBottom: 12,
    marginTop: 10,
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
  },
  flexStart: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultMarginHorizontal: {
    marginHorizontal: 16,
  },
  defaultMarginVertical: {
    marginVertical: 10,
  },
  defaultBorderRadius: {
    borderRadius: 4,
  },

  flexBetween: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexCenter: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexCenterColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  modalView: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    // backgroundColor: COLORS.primary,
    paddingHorizontal: 24,
    paddingBottom: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  texts: {
    // color: COLORS.white,
    fontSize: 14,
    fontWeight: '400'
  },
  xIcon: {
    width: 20,
    height: 20,
  },
  backgroundPrimaryAreaForIcons: {
    height: 32,
    width: 32,
    borderRadius: 500,
    // backgroundColor: COLORS.primary,
    marginRight: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  switch: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  defaultPaddingVertical: {
    paddingEnd: 16,
    paddingStart: 16
  },
  customInput: {
    flexDirection: 'row',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    paddingHorizontal: 12,
    height: 50,
    marginTop: 4,
    // borderColor: COLORS.white_04
  },
  arrowBottomIcon: {
    width: 14,
    height: 14,
  },
});
